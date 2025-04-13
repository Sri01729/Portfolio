import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the visits data file
const dataFilePath = path.join(process.cwd(), 'data', 'visits.json');

// Ensure the data directory exists
const ensureDataDir = () => {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Initialize or load visits data
const loadVisitsData = () => {
  ensureDataDir();

  if (!fs.existsSync(dataFilePath)) {
    const initialData = { total: 0, unique: 0, ips: {} };
    fs.writeFileSync(dataFilePath, JSON.stringify(initialData, null, 2));
    return initialData;
  }

  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading visits data:', error);
    return { total: 0, unique: 0, ips: {} };
  }
};

// Save visits data
const saveVisitsData = (data: any) => {
  ensureDataDir();
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

export async function GET(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  const visitsData = loadVisitsData();

  // Update total visits
  visitsData.total += 1;

  // Check if this is a unique IP
  const isUniqueIP = !visitsData.ips[ip];
  if (isUniqueIP) {
    visitsData.unique += 1;
    visitsData.ips[ip] = {
      count: 1,
      lastVisit: new Date().toISOString()
    };
  } else {
    visitsData.ips[ip].count += 1;
    visitsData.ips[ip].lastVisit = new Date().toISOString();
  }

  // Save updated data
  saveVisitsData(visitsData);

  // Return visit counts
  return NextResponse.json({
    total: visitsData.total,
    unique: visitsData.unique
  });
}