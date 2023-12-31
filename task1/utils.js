function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

function findDates (content) {
        const regexp = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g
        return content.match(regexp) || [];
}

function nextId (notesData) {
        if (notesData.length === 0){
                return 1
        }

        const maxId = Math.max(...notesData.map(note => note.id))
        return maxId + 1
}

export { formatDate, findDates, nextId }
