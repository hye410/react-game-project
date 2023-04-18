import './Number.css';

function Number({team,num,sum,history}){
  return(
    <section>
      <h3>{team}</h3>
      <figure>          
        <img src={`./images/${num}.png`} atl={num} />
        <figcaption>
          <dl>
            <dt>총 합계</dt>
            <dd>
              {sum}점
            </dd>
            <dt>기록</dt>
            <dd>
              {history.join(',')}
            </dd>
          </dl>
        </figcaption>  
      </figure>
    </section>
  )
}

export default Number;