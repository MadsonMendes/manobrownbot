import client from "./client";
import result from "./markov"

async function tweet(){
  await client.v2.tweet(`${result}`);
  console.log(`${result}`)
}

export default tweet