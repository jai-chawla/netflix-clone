import React from 'react'
import CardSlider from './CardSlider'
import styled from "styled-components";

export default function Slider({movies}) {

  const getMoviesFromRange=(from,to)=>{
    return movies.slice(from,to)
  }
  // console.log(movies);

  return (
    <Container>
      <CardSlider title="trending Now" data={getMoviesFromRange(0,10)}/>
      <CardSlider title="New Releases" data={getMoviesFromRange(10,20)}/>
      <CardSlider title="Blockbuster Movies" data={getMoviesFromRange(20,30)}/>
      <CardSlider title="Popular on Netflix" data={getMoviesFromRange(30,40)}/>
      <CardSlider title="Action Movies" data={getMoviesFromRange(40,50)}/>
      <CardSlider title="Epics" data={getMoviesFromRange(50,60)}/>
    </Container>
  )
};

const Container = styled.div``;