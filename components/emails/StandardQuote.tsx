import React from "react";

interface EmailProps {
  clientName: string;
  items: Array<{ description: string; qty: string; rate: string; total: string }>;
  totalAmount: string;
}

export const StandardQuote = ({ clientName, items, totalAmount }: EmailProps) => {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#1a202c", maxWidth: "600px", margin: "0 auto", padding: "20px", border: "1px solid #e2e8f0", borderRadius: "8px" }}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <img src="https://pavikadistributionnetwork.com/pavika-logo.jpg" alt="Pavika Distribution Network" style={{ width: "150px" }} />
      </div>
      
      <h2 style={{ fontSize: "24px", fontWeight: "900", color: "#0b2545", marginBottom: "10px", textAlign: "center" }}>COMMERCIAL QUOTATION</h2>
      
      <p style={{ fontSize: "16px", color: "#4a5568", marginBottom: "20px" }}>
        Dear <strong>{clientName}</strong>,
      </p>
      
      <p style={{ fontSize: "14px", color: "#4a5568", marginBottom: "20px" }}>
        Thank you for choosing Pavika Distribution Network. Below is the requested price quotation for your procurement requirements.
      </p>
      
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f8fafc" }}>
            <th style={{ padding: "10px", borderBottom: "2px solid #e2e8f0", textAlign: "left", fontSize: "12px", color: "#64748b" }}>DESCRIPTION</th>
            <th style={{ padding: "10px", borderBottom: "2px solid #e2e8f0", textAlign: "center", fontSize: "12px", color: "#64748b" }}>QTY</th>
            <th style={{ padding: "10px", borderBottom: "2px solid #e2e8f0", textAlign: "right", fontSize: "12px", color: "#64748b" }}>RATE (₹)</th>
            <th style={{ padding: "10px", borderBottom: "2px solid #e2e8f0", textAlign: "right", fontSize: "12px", color: "#64748b" }}>TOTAL (₹)</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td style={{ padding: "10px", borderBottom: "1px solid #f1f5f9", fontSize: "14px" }}>{item.description}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #f1f5f9", fontSize: "14px", textAlign: "center" }}>{item.qty}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #f1f5f9", fontSize: "14px", textAlign: "right" }}>{item.rate}</td>
              <td style={{ padding: "10px", borderBottom: "1px solid #f1f5f9", fontSize: "14px", textAlign: "right", fontWeight: "bold" }}>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={{ textAlign: "right", padding: "10px", backgroundColor: "#0b2545", borderRadius: "4px" }}>
        <span style={{ fontSize: "16px", fontWeight: "bold", color: "#ffffff" }}>GRAND TOTAL: ₹{totalAmount}</span>
      </div>
      
      <div style={{ marginTop: "30px", fontSize: "12px", color: "#718096", borderTop: "1px solid #edf2f7", paddingTop: "20px" }}>
        <p><strong>Note:</strong> Rates are valid for 24 hours. Logistics and GST as applicable.</p>
        <p style={{ marginTop: "10px" }}>Pavika Distribution Network | Flat No 108, Parth Enclave, Jaipur | +91 73000 15127</p>
      </div>
    </div>
  );
};
