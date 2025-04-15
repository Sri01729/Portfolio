import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Table name for storing the visit count
const VISITS_TABLE = 'visits';

// Type for the visits table row
type VisitRow = {
  id: number;
  count: number;
};

// Get the current visit count
const getVisitCount = async () => {
  try {
    const { data, error } = await supabase
      .from(VISITS_TABLE)
      .select('count')
      .single();

    if (error) {
      console.error('Error getting visit count from Supabase:', error);
      return 0;
    }

    return data?.count || 0;
  } catch (error) {
    console.error('Error getting visit count from Supabase:', error);
    return 0;
  }
};

// Increment the visit count
const incrementVisitCount = async () => {
  try {
    // First, get the current count
    const { data: currentData, error: getError } = await supabase
      .from(VISITS_TABLE)
      .select('*')
      .single();

    if (getError && getError.code !== 'PGRST116') { // PGRST116 is "no rows returned"
      console.error('Error getting current count from Supabase:', getError);
      return 0;
    }

    const currentCount = (currentData as VisitRow)?.count || 0;
    const newCount = currentCount + 1;

    // If no record exists, create one
    if (!currentData) {
      const { error: insertError } = await supabase
        .from(VISITS_TABLE)
        .insert([{ count: newCount }]);

      if (insertError) {
        console.error('Error inserting new count to Supabase:', insertError);
        return 0;
      }
    } else {
      // Update the existing record
      const { error: updateError } = await supabase
        .from(VISITS_TABLE)
        .update({ count: newCount })
        .eq('id', (currentData as VisitRow).id);

      if (updateError) {
        console.error('Error updating count in Supabase:', updateError);
        return 0;
      }
    }

    return newCount;
  } catch (error) {
    console.error('Error incrementing visit count in Supabase:', error);
    return 0;
  }
};

export async function GET() {
  try {
    const count = await getVisitCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error getting visit count:', error);
    return NextResponse.json({ count: 0, error: 'Failed to get visit count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const count = await incrementVisitCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error incrementing visit count:', error);
    return NextResponse.json({ count: 0, error: 'Failed to increment visit count' }, { status: 500 });
  }
}