const neo4j = require('neo4j-driver')
const {session} = require("neo4j-driver");

const url = `neo4j://test-neo4j:7687`;

(async ()=>{
    console.log(`start connect to neo4j : ${url}`);
    const driver = neo4j.driver(
        url,
        neo4j.auth.basic('neo4j', 'nodejs_to_neo4j')
    )


    const endFn = (session)=>{
        setTimeout(()=>{
            session.close();
            driver.close();

            console.log(`end connect to neo4j : ${url}`);
        }, 3000);
    };

    setTimeout(async ()=>{

        for(let i= 0; i < 10 ; i++){
            const session = driver.session();
            let userId = '123';
            let nameParam = 'John Doe';

            const query = 'MERGE (n:Person {user_id: $userId,  name: $nameParam}) RETURN n';
            console.log(
                `query(${i + 1}): ${query}`
                .replace('$userId', userId)
                .replace('$nameParam', nameParam)
            );

            let dictResult = session.run(query, { userId, nameParam });

            if(i === 9) {
                dictResult.then(endFn(session));
            } else {
                dictResult.then();
            }
        }
    }, 1000);

})();
