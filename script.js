<script>
        const form = document.getElementById("bookForm");
        const title = document.getElementById("title");
        const description = document.getElementById("description");
        const author = document.getElementById("author");
        const publisher = document.getElementById("publisher");
        const tableBody = document.querySelector("#bookTable tbody");
        const clearBtn = document.getElementById("clearBtn");

        // Save button
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            if (!title.value || !description.value || !author.value || !publisher.value) {
                alert("Semua field harus diisi!");
                return;
            }
            const row = document.createElement("tr");
            row.innerHTML = `
        <td data-label="Title">${title.value}</td>
        <td data-label="Description">${description.value}</td>
        <td data-label="Author">${author.value}</td>
        <td data-label="Publisher">${publisher.value}</td>
      `;
            tableBody.appendChild(row);
            form.reset();
            title.focus();
        });

        // Clear button
        clearBtn.addEventListener("click", function () {
            form.reset();
            title.focus();
        });
    </script>