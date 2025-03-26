document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll('.table-head-btn[data-action="filter"]').forEach(button => {
    button.addEventListener('click', () => {
        const filterRow = document.getElementById('table-filters');

        // Alterna a visibilidade da linha de filtros
        if (filterRow.style.display === 'none' || filterRow.style.display === '') {
            filterRow.style.display = 'table-row';
        } else {
            filterRow.style.display = 'none';
        }
    });
});
});