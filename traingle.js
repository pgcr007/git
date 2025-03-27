// let n = 6;

// for(let i = 0 ; i <= n;i++)
// {
//     console.log("*".repeat(i));
// }


// triangle 

let  m = 8;

for( let i = m ; i >= 1;i--)
{
    let spaces = " ".repeat(m-i);
    let starts = "* ".repeat(i);
    console.log(spaces+starts);
}
