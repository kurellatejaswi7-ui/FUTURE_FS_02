let leads = [];

function addLead() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let status = document.getElementById("status").value;
  let notes = document.getElementById("notes").value;

  let lead = {
    name: name,
    email: email,
    status: status,
    notes: notes
  };

  leads.push(lead);

  displayLeads();
}

function displayLeads() {

  let data = "";

  leads.forEach(function(lead) {

    data += `
      <div class="card">
        <h3>${lead.name}</h3>
        <p>Email: ${lead.email}</p>
        <p>Status: ${lead.status}</p>
        <p>Notes: ${lead.notes}</p>
      </div>
    `;
  });

  document.getElementById("leadList").innerHTML = data;
}