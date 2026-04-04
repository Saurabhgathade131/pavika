import { NextResponse } from "next/server";

// Mock database (In-memory for demo/development)
// In production on Vercel, this would reset frequently.
// Integration with MongoDB/Supabase/PostgreSQL is recommended for persistence.
let leads: any[] = [
  {
    id: "lead-1",
    name: "Saurabh Gathade",
    email: "saurabh.biz@example.com",
    requirements: "Bulk inquiry for 500 Tons of Mild Steel TMT Bars for a new construction project in Pune.",
    date: new Date().toISOString(),
    status: "New"
  },
  {
    id: "lead-2",
    name: "Industrial Procurements Ltd",
    email: "procure@ipltd.in",
    requirements: "Requirement for 50 KL of industrial Methanol and 10 Tons of Soda Ash.",
    date: new Date(Date.now() - 86400000).toISOString(),
    status: "In Progress"
  }
];

export async function GET() {
  return NextResponse.json(leads);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    if (!body.name || !body.email || !body.requirements) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const newLead = {
      id: `lead-${Date.now()}`,
      name: body.name,
      email: body.email,
      requirements: body.requirements,
      date: new Date().toISOString(),
      status: "New"
    };

    leads.unshift(newLead);
    
    return NextResponse.json({ message: "Lead captured successfully", lead: newLead });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
