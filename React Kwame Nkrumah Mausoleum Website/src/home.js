import React from 'react';
import styled from 'styled-components';
import one from './assets/one.jpeg';
//import two from './assets/two.jpeg';
import three from './assets/three.jpeg';
import four from './assets/four.jpeg';
import bigsix from './assets/bigsix.jpeg';

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


export const Home = () => (

  <div>

    <div>
      <h1>Who was Nkrumah ? </h1>
    </div>
    <br></br>
    <br></br>
    <div>

      <h2>Introduction</h2>
      <p>

        Kwame Nkrumah PC (21 September 1909[a] – 27 April 1972) was a Ghanaian politician and revolutionary.
        He was the first Prime Minister and President of Ghana, having led the Gold Coast to independence from Britain in 1957.
        An influential advocate of pan-Africanism, Nkrumah was a founding member of the Organisation of African Unity and winner of the Lenin Peace Prize in 1962.
        After twelve years abroad pursuing higher education, developing his political philosophy and organising with other diasporic pan-Africanists,
        Nkrumah returned to the Gold Coast to begin his political career as an advocate of national independence.
        He formed the Convention People's Party, which achieved rapid success through its unprecedented appeal to the common voter.
        He became Prime Minister in 1952 and retained this position when Ghana declared independence from Britain in 1957.
        In 1960, Ghanaians approved a new constitution and elected Nkrumah President.
        His administration was both nationalist and socialist. Thus, it funded national industrial and energy projects,
        developed a strong national education system and promoted a national and pan-African culture. Under Nkrumah,
        Ghana played a leading role in African international relations during the decolonisation period.
        Nkrumah was deposed in 1966 by the National Liberation Council which under the supervision of international financial institutions privatised many of the country's state corporations.
        Nkrumah lived the rest of his life in Guinea, of which he was named honorary co-president.
        <br></br>
        <br></br>
        <br></br>
        <Styles>
          <img className='center' src={one} />
        </Styles>
      </p>
    </div>


    <br></br>
    <br></br>
    <p>
      <h2>Early Years</h2>
      Kwame Nkrumah’s father was a goldsmith and his mother a retail trader. Baptized a Roman Catholic,
      Nkrumah spent nine years at the Roman Catholic elementary school in nearby Half Assini.
      After graduation from Achimota College in 1930,
      he started his career as a teacher at Roman Catholic junior schools in Elmina and Axim and at a seminary.
      Increasingly drawn to politics,
      Nkrumah decided to pursue further studies in the United States.
      He entered Lincoln University in Pennsylvania in 1935 and, after graduating in 1939,
      obtained master’s degrees from Lincoln and from the University of Pennsylvania.
      He studied the literature of socialism, notably Karl Marx and Vladimir I. Lenin, and of nationalism,
      especially Marcus Garvey, the black American leader of the 1920s. Eventually,
      Nkrumah came to describe himself as a “nondenominational Christian and a Marxist socialist.”
      He also immersed himself in political work, reorganizing and becoming president of the African Students’ Organization of the United States and Canada.
      He left the United States in May 1945 and went to England, where he organized the 5th Pan-African Congress in Manchester.
      <br></br>
      <br></br>
      <br></br>
      <Styles>
        <img className='center' src={four} />
      </Styles>
    </p>

    <br></br>
    <br></br>
    <p>
      <h2>Ghanaian independence</h2>
      Ghana became independent on 6 March 1957.
      As the first of Britain's African colonies to gain majority-rule independence,
      the celebrations in Accra were the focus of world attention;
      over 100 reporters and photographers covered the events.
      United States President Dwight D. Eisenhower sent congratulations and his vice president, Richard Nixon, to represent the U.S. at the events.
      The Soviet delegation urged Nkrumah to visit Moscow as soon as possible.
      Ralph Bunche, an African American, was there for the United Nations, while the Duchess of Kent represented Queen Elizabeth.
      Offers of assistance poured in from across the world.
      Even without them, the country seemed prosperous, with cocoa prices high and the potential of new resource development.
      As the fifth of March turned to the sixth, Nkrumah stood before tens of thousands of supporters and proclaimed, "Ghana will be free forever."
      He spoke at the first session of the Ghana Parliament that Independence Day,
      telling his new country's citizens that "we have a duty to prove to the world that Africans can conduct their own affairs with efficiency and tolerance and through the exercise of democracy.
      We must set an example to all Africa."
      Nkrumah was hailed as the Osagyefo – which means "redeemer" in the Akan language.
      This independence ceremony included the Duchess of Kent and Governor General Charles Arden-Clarke.
      With more than 600 reporters in attendance, Ghanaian independence became one of the most internationally reported news events in modern African history.
      The flag of Ghana designed by Theodosia Okoh, inverting Ethiopia's green-yellow-red Lion of Judah flag and replacing the lion with a black star.
      Red symbolises bloodshed; green stands for beauty, agriculture, and abundance; yellow represents mineral wealth; and the Black Star represents African freedom.
      The country's new coat of arms, designed by Amon Kotei, includes eagles, a lion, a St. George's Cross, and a Black Star, with copious gold and gold trim.[76] Philip Gbeho was commissioned to compose the new national anthem, "God Bless Our Homeland Ghana".
      As a monument to the new nation, Nkrumah opened Black Star Square near Osu Castle in the coastal district of Osu, Accra. This square would be used for national symbolism and mass patriotic rallies.
      Under Nkrumah's leadership, Ghana adopted some socialist policies and practices. Nkrumah created a welfare system, started various community programs, and established schools.Ï
    <br></br>
      <br></br>
      <br></br>
      <Styles>
        <img className='center' src={bigsix} />
      </Styles>
    </p>
  </div>

)