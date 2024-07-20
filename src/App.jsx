import { useState } from "react";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("status");
  const [selectedCValue, setSelectedCValue] = useState("priority");
  const status = ["pending", "in progress", "completed"];
  const priority = ["high", "medium", "low"];
  const employee = ["alice", "bob", "charlie", "david"];

  return (
    <div className="App">
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>Row header:</label>
        <select style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }} onClick={(e) => setSelectedCValue(e.target.value)}>
          <option value="status">Status</option>
          <option value="priority">Priority</option>
          <option value="employee">Employee</option>
        </select>

        <label style={{ fontWeight: "bold" }}>Column header:</label>
        <select style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }} onClick={(e) => setSelectedValue(e.target.value)}>
          <option value="status">Status</option>
          <option value="priority">Priority</option>
          <option value="employee">Employee</option>
        </select>
      </div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", borderBottom: "1px solid #ddd" }}>
            <th style={{ padding: "10px", textAlign: "left", borderTop: "1px solid #ddd" }}></th>
            {selectedValue === "status"
              ? status.map((data, index) => <th key={index} style={{ padding: "10px", textAlign: "center" }}>{data}</th>)
              : selectedValue === "employee"
              ? employee.map((data, index) => <th key={index} style={{ padding: "10px", textAlign: "center" }}>{data}</th>)
              : priority.map((data, index) => <th key={index} style={{ padding: "10px", textAlign: "center" }}>{data}</th>)}
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            {selectedCValue === "status" && <th style={{ padding: "10px", textAlign: "left", borderRight: "1px solid #ddd" }}>{status[0]}</th>}
            {selectedCValue === "employee" && <th style={{ padding: "10px", textAlign: "left", borderRight: "1px solid #ddd" }}>{employee[0]}</th>}
            {selectedCValue === "priority" && <th style={{ padding: "10px", textAlign: "left", borderRight: "1px solid #ddd" }}>{priority[0]}</th>}
            <td style={{ padding: "10px", textAlign: "center" }}>Data 1</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Data 2</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Data 3</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            {selectedCValue === "status" && <th style={{ padding: "10px", textAlign: "left", borderRight: "1px solid #ddd" }}>{status[1]}</th>}
            {selectedCValue === "employee" && <th style={{ padding: "10px", textAlign: "left", borderRight: "1px solid #ddd" }}>{employee[1]}</th>}
            {selectedCValue === "priority" && <th style={{ padding: "10px", textAlign: "left", borderRight: "1px solid #ddd" }}>{priority[1]}</th>}
            <td style={{ padding: "10px", textAlign: "center" }}>Data 4</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Data 5</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Data 6</td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            {selectedCValue === "status" && <th style={{ padding: "10px", textAlign: "left", borderRight: "1px solid #ddd" }}>{status[2]}</th>}
            {selectedCValue === "employee" && <th style={{ padding: "10px", textAlign: "left", borderRight: "1px solid #ddd" }}>{employee[2]}</th>}
            {selectedCValue === "priority" && <th style={{ padding: "10px", textAlign: "left", borderRight: "1px solid #ddd" }}>{priority[2]}</th>}
            <td style={{ padding: "10px", textAlign: "center" }}>Data 7</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Data 8</td>
            <td style={{ padding: "10px", textAlign: "center" }}>Data 9</td>
          </tr>
          {selectedCValue === "employee" && (
            <tr style={{ borderBottom: "1px solid #ddd" }}>
              <th style={{ padding: "10px", textAlign: "left", borderRight: "1px solid #ddd" }}>{employee[3]}</th>
              <td style={{ padding: "10px", textAlign: "center" }}>Data 7</td>
              <td style={{ padding: "10px", textAlign: "center" }}>Data 8</td>
              <td style={{ padding: "10px", textAlign: "center" }}>Data 9</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
