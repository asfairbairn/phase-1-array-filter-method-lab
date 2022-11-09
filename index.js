// Code your solution here

const findMatching = (string) => {
    results = drivers.filter(filterByName(string))
    return results
}


function filterByName(string) {
    if (drivers.name === string){
        return true;
    }else {return false}
}    


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
    
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
