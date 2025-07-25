
function Frutes(){
    
  const frutes =  [
    
                    {id: 1, name:'orange', calaries: 100 },
                    {id: 2, name:'mango', calaries: 56 },
                    {id: 3, name:'Banana', calaries: 120 },
                    {id: 4, name:'pineapple', calaries: 20 }
                  ];
         
                // frutes.sort((a,b)=>a.name.localeCompare(b.name));
                // frutes.sort((a,b)=>b.name.localeCompare(a.name));
                // frutes.sort((a,b)=>a.calaries - b.calaries);
                frutes.sort((a,b)=>b.calaries - a.calaries);
  const myfrutes = frutes.map(frutes => <li key={frutes.id}>{frutes.name}&nbsp;<b>{frutes.calaries}</b></li>);
  return (
    <>
      <ol>{myfrutes}</ol>
    </>
  );
}

export default Frutes;