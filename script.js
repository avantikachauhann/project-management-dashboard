const sideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu_bar");
const closeButton = document.querySelector("#close_button");
const themeToggler = document.querySelector(".theme-toggler");

// Sidebar menu toggle
menuButton.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
closeButton.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Theme toggler (dark/light mode)
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

// Populate data on page load
document.addEventListener("DOMContentLoaded", () => {
  // Sample project data
  const projectData = [
    {
      SNo: "1",
      ProjectName: "Website Revamp",
      Department: "IT",
      StartDate: "2024-10-01",
      EndDate: "2024-12-01",
      Status: "In Progress",
      ProjectManager: "John Doe",
    },
    {
      SNo: "2",
      ProjectName: "Marketing Campaign",
      Department: "Marketing",
      StartDate: "2024-09-15",
      EndDate: "2024-10-31",
      Status: "Completed",
      ProjectManager: "Jane Smith",
    },
    {
      SNo: "3",
      ProjectName: "Inventory Optimization",
      Department: "Logistics",
      StartDate: "2024-07-10",
      EndDate: "2025-01-10",
      Status: "On Hold",
      ProjectManager: "David Brown",
    },
  ];

  // Render table rows
  const tableBody = document.querySelector("table tbody");
  tableBody.innerHTML = "";
  projectData.forEach((project) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${project.SNo}</td>
      <td>${project.ProjectName}</td>
      <td>${project.Department}</td>
      <td>${project.StartDate}</td>
      <td>${project.EndDate}</td>
      <td class="${
        project.Status === "In Progress"
          ? "primary"
          : project.Status === "Completed"
          ? "success"
          : "warning"
      }">${project.Status}</td>
      <td>${project.ProjectManager}</td>
    `;
    tableBody.appendChild(tr);
  });
});
