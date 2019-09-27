import React from 'react';
import styled from 'styled-components';
//import one from './assets/one.jpg';
import three from './assets/three.jpg';
import five from './assets/five.jpg';
import four from './assets/four.jpg';




const Styles = styled.a`

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  length: 500px;
  width: 500px;
}

`;

export const About = () => (

  <div>
    <h2>About Page</h2>
    <br></br>
    <br></br>
    <p>
      The Kwame Nkrumah Mausoleum and memorial park is located in downtown Accra, the capital of Ghana.
      It is dedicated to the prominent Ghanaian leader Kwame Nkrumah.
      The memorial complex was dedicated in 1992, and is situated on the site of the former British colonial polo grounds in Accra.
      The mausoleum, designed by Don Arthur, houses the bodies of Kwame Nkrumah and his wife Fathia Nkrumah.
      The building is meant to represent an upside down sword, which in Akan culture is a symbol of peace.
      The mausoleum is clad from top to bottom with Italian marble, with a black star at its apex to symbolize unity. The interior boasts marble flooring and a mini mastaba looking marble grave marker, surrounded by river-washed rocks. A skylight at the top in the mausoleum illuminates the grave.
      The mausoleum is surrounded by water, a symbol of life.
      Kwame Nkrumah Mausoleum, also know as the Kwame Nkrumah Memorial Park(KNMP) is the last resting place of the first President of Ghana, Osagyefo Dr. Kwame Nkrumah. It is dedicated to him for his outstanding campaign to liberate Ghana(by then Gold Coast) from colonial rule in 6th March,1957.
      The entrance to the site is from the 28th February High Street just along the coast from Independence Square. It is located directly opposite the old Paliarment House now known as the Commission for Human Rights and Administrative Justice(CHRAJ).
      It has a total surface area of approximately 5.3 acres. The mausoleum provides a front for the statue of Nkrumah whereas the museum is subterranean and does not compete with the mausoleum for attention. Rhythm, contrast and harmony were the main principles of design used in this building.
      <br></br>
      <br></br>
      <br></br>
      <Styles>
        <img className='center' src={three} />
      </Styles>
    </p>

    <br></br>
    <br></br>
    <br></br>

    <p>
      <h2>Why a Mausoleum of Kwame Nkrumah?</h2>
      Dr. Nkrumah was overthrown by military government in 1966, after ruling for 9 years.
      He then went to exile in the Republic of Guinea. He fell ill and died in Bucharest, Romania 1972 when seeking medical treatment.
      Nkrumah’s body was buried in Guinea since he was the Co-president there.
      With Nkrumah dead, the Arican Students Union in London feared that, the total emancipation of Africa has come to a dead end.
      The students sent a memo to Guinea asking that the body of the late president should be brought to Ghana only if the then military government would denounce coup d’etat and re-erect the statue of Kwame Nkrumah that was toppled down during the coup.
      This marked the beginning of the Nkrumah Mausoleum Monument.
      After 20 years of his death, Dr. Nkrumah’s image was restored in 1st July, 1992 on the same grounds where he led Ghana to liberation from colonialism on 6th march 1957.
      <br></br>
      <br></br>
      <br></br>
      <Styles>
        <img className='center' src={five} />
      </Styles>
      </p>

    <br></br>
    <br></br>
    <br></br>

    <p>
      <h2>In side the Nkrumah Mausoleum</h2>
      The Museum houses the personal effects and publications of Ghana’s first president and pictures showing his life history.
      Some of these pictures of Dr. Nkrumah with some of the most famous people of his time is an eye opener.
      Wander through the photos, and you will be stunned at how many of the 20th century’s most iconic people pictured shaking hands with the founder of modern Ghana.
      He is pictured with famous people like Jawarharlal Nehru, Mao Zedong, Fidel Castro, Nikita Khrushchev, John F Kennedy of U.S.A, Sir Alec Hume, Queen Elizabeth II of England, Harold Macmillan, Pope Pius XII, President Nasser of Egypt, and countless leaders of countries like Malaya, Sri Lanka, Niger not forgetting Nigeria and many other more.
      The body is buried under a catafalque raised in the centre of the park. Symbols which reflect Ghana’s culture and history were used to portray Dr. Nkrumah’s vision to promote the African personality. The full statue of Dr Nkrumah, wearing a cloth, in bronze is sited at the exact location where he proclaimed Ghana’s independence.
      As you approach the main way leading to the Kwame Nkrumah Mausoleum, you’ll see springs on either sides of the walk way. Each spring has seven bare-chested, squatting statuettes of flute blowers, who seem to welcome the arrival of world leaders and other important personalities.
      The design of the Kwame Nkrumah Mausoleum, which represents swords turned upside down symbolizes peace. It can also be viewed as an uprooted tree to signify the unfinished work of Dr. Nkrumah to totally unite Africa.
      This is a place you wouldn’t want to miss during your stay in Ghana, since the transition of Gold Coast to Ghana happened on this same location. Kwame Nkrumah Mausoleum, is what some scholars call the “genesis” of the actual History Of Ghana.


      <br></br>
        <br></br>
        <br></br>
        <Styles>
          <img className='center' src={four} />
        </Styles>
        </p>
  </div>

)