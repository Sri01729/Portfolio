import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the JSON file that will store the visit count
const dataFilePath = path.join(process.cwd(), 'data', 'visits.json');

// Ensure the data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Initialize the visits file if it doesn't exist
const initializeVisitsFile = () => {
  ensureDataDir();
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify({ count: 0 }), 'utf8');
  }
};

// Get the current visit count
const getVisitCount = () => {
  initializeVisitsFile();
  const data = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(data).count;
};

// Increment the visit count
const incrementVisitCount = () => {
  initializeVisitsFile();
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));
  data.count += 1;
  fs.writeFileSync(dataFilePath, JSON.stringify(data), 'utf8');
  return data.count;
};

export async function GET() {
  try {
    const count = getVisitCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error getting visit count:', error);
    return NextResponse.json({ count: 0, error: 'Failed to get visit count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const count = incrementVisitCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error incrementing visit count:', error);
    return NextResponse.json({ count: 0, error: 'Failed to increment visit count' }, { status: 500 });
  }
}