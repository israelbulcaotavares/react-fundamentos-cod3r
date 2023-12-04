export default function Page() {
    // const trecho = <h1>Trecho #2</h1>    
    const trechos = [
        <div key="1">Trecho #1</div>, /* indice 0 */
        <div key="2">Trecho #2</div>,  /* indice 1 */
        <div key="3">Trecho #3</div>,  /* indice 2 */
    ]    
 
   
    return trechos[1]
}