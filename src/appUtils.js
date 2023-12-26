export function calculateExp(inputDate) {
   const currentDate = new Date();
   const givenDate = new Date(inputDate);

   const yearsDiff = currentDate.getFullYear() - givenDate.getFullYear();
   const monthsDiff = currentDate.getMonth() - givenDate.getMonth();

   let yearString = yearsDiff > 0 ? `${yearsDiff} year${yearsDiff > 1 ? 's' : ''}` : '';
   let monthString = monthsDiff > 0 ? `${monthsDiff} month${monthsDiff > 1 ? 's' : ''}` : '';

   if (yearsDiff > 0 && monthsDiff > 0) {
      return `${yearString} ${monthString}`;
   } else if (yearsDiff > 0) {
      return yearString;
   } else if (monthsDiff > 0) {
      return monthString;
   } else {
      return '0 months';
   }
}