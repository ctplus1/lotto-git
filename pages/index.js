import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'
import _ from 'underscore'
import styled from 'styled-components'

const Row = styled.div`
  display : flex;
  flex-direction : row;
`

const color = '#e5e5e5';

const Number = styled.span`
  display : flex;
  width : 100px;
  height : 100px;
  border-radius : 50px;
  justify-content : center;
  align-items : center;
  font-size : 3rem;
  background : ${ props => {
     const n = parseInt( props.children, 10);
     if( n <= 10 ){
      return '#fbc400;'
     }else if( n <= 20 ){
      return '#69c8f2;'
     }else if( n <= 30 ){
      return '#ff7272;'
     }else if( n <= 40 ){
      return '#aaa;' 
    }else{
      return '#b0d840;'
    }
  }};

  color : ${ props =>{
    const n = parseInt ( props.children, 10);
    if( 10 < n && n <= 20 ){
      return 'white;'
     }else if( 30 < n && n <=40 ){
      return 'white;'
     }else{
      return 'white;'
    }
  }
  }
`


function generate(){
  let numbers = [];
  _.times(45, n => numbers.push( n + 1) );
  numbers = _.shuffle( numbers );
  numbers.length = 6;
  numbers = _.sortBy( numbers );
  
  return numbers;
}

const Home = () => { 
  const [ list, setList] = React.useState( [] );
  const regenerate = () =>{
    setList( generate() ) 
  }

  React.useEffect( () => {
    //mount, update
    regenerate();
  }, [] );//주시할 대상

  return (
      <div>
      <Head>
        <title>Home</title>
      </Head>
      

      <div className='container'>
        <Row>
          { list.map( element => <Number key={ element }>{ element}</Number>) }
        </Row>
        <br/>
        <div>
          <button onClick={ regenerate }>재생성</button>
          <button onClick={ () => setList( generate() ) }>다시</button>
        </div>
      </div>

      
      
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
    
  )
}

export default Home
