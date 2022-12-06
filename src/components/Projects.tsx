import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Project from './Project'
import Star from '../assets/icons/Star'

type Props = {}

const circleWidth = 34
const circleHeight = 24
const circlePadding = 1
const ovalHeight = 36
const ovalWidth = 24

const Stripes = styled.div`
  z-index: -2;
  position: absolute;
  height: 100%;
  left: 0;
  width: calc(88vw);
  left: 6vw;
  /* border: 1px solid blue; */
  background-image: linear-gradient(
      to left,
      transparent 1px,
      transparent calc((78vw - 1px) / 24 - 1px),
      ${(props) => props.theme.primary} calc((78vw - 1px) / 24 - 1px),
      ${(props) => props.theme.primary} calc((78vw - 1px) / 24)
    ),
    linear-gradient(
      to left,
      transparent 1px,
      transparent calc((78vw - 1px) / 24 - 1px),
      ${(props) => props.theme.primary} calc((78vw - 1px) / 24 - 1px),
      ${(props) => props.theme.primary} calc((78vw - 1px) / 24)
    );
  background-size: calc((78vw - 1px) / 24) 100%, calc((78vw - 1px) / 24) 93%;
  background-position-x: calc((78vw - 1px) / 24 / 2), calc((78vw - 1px) / 24);
  /* background-image: linear-gradient(
      to left,
      transparent 1px,
      transparent calc((88vw - 2px) / 8 - 1px),
      rgba(255, 255, 255, 0.6) calc((88vw - 2px) / 8 - 1px),
      rgba(255, 255, 255, 0.6) calc((88vw - 2px) / 8)
    ),
    linear-gradient(
      to left,
      transparent 1px,
      transparent calc((88vw - 2px) / 8 - 1px),
      rgba(255, 255, 255, 0.6) calc((88vw - 2px) / 8 - 1px),
      rgba(255, 255, 255, 0.6) calc((88vw - 2px) / 8)
    );
  background-size: calc((88vw - 2px) / 8) 100%, calc((88vw - 2px) / 8) 97%;
  background-position-x: calc((88vw - 2px) / 8 / 2), calc((88vw - 2px) / 8); */
`

// const Middle = styled.div`
//   position: absolute;
//   height: 100%;
//   left: 30vw;
//   width: 40vw;
//   background-color: ${(props) => props.theme.bg};
// `

const Middle = styled.div`
  position: absolute;
  height: 100%;
  left: 30vw;
  width: 40vw;
  background-color: ${(props) => props.theme.bg};
  z-index: -1;
`

const SemiCircle = styled.div`
  position: relative;
  height: ${circleHeight}vw;
  width: calc(${circleWidth}vw - ${2 * circlePadding}rem);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.secondary};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: ${circleWidth / 2}vw ${circleWidth / 2}vw 0 0;
  padding: ${circlePadding}rem;

  background-clip: content-box;
  box-sizing: content-box;

  .star {
    position: absolute;
    background-color: ${(props) => props.theme.bg};
    path {
      fill: ${(props) => props.theme.primary};
      stroke: ${(props) => props.theme.primary};
    }
  }
  .star1 {
    width: 2rem;
    height: 2rem;
    left: 25%;
    bottom: 0;
    transform: translate(0, 50%);
    padding: 0 0.25em;
  }

  .star2 {
    width: 1.75rem;
    height: 1.75rem;
    bottom: 25%;
    right: 0;
    padding: 0.25em 0;
    transform: translate(50%, 0);
  }

  .star3 {
    width: 1.75rem;
    height: 1.75rem;
    top: 0;
    left: 50%;
    padding: 0 0.25em;
    transform: translate(-50%, -50%);
  }
`

const ShapeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0;
`

const Oval = styled.div`
  /* position: relative; */
  position: absolute;
  /* top: ${-ovalHeight + (circleWidth - circleHeight + 2) / 2}vw; */
  margin-top: -${(circleWidth - circleHeight) / 2}vw;
  height: ${ovalHeight}vw;
  width: ${ovalWidth}vw;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  transform: rotate(-45deg);
`

const ProjectContainer = styled.div``

const Text = styled.div`
  font: 400 italic 6vw 'Bodoni Mona';
  color: ${(props) => props.theme.primary};
`

const Container = styled.div`
  position: relative;
`

const star = (n: number) => {
  return (
    <svg
      width='128'
      height='128'
      viewBox='0 0 128 128'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`star star${n}`}
    >
      <path
        d='M127.207 64.0003C127.471 63.9999 127.735 63.9999 128 64.0002C127.735 64.0006 127.471 64.0007 127.207 64.0003C77.2374 64.0816 64.0675 78.8457 64.0003 127.207C64.0008 127.47 64.0008 127.735 64.0004 128C64 127.735 64 127.47 64.0003 127.207C63.9191 77.2373 49.1545 64.0674 0.793136 64.0002C0.52978 64.0006 0.265403 64.0007 0 64.0003C0.265377 63.9999 0.529755 63.9998 0.793136 64.0002C50.763 63.9189 63.9329 49.1545 64.0001 0.793138C64.0814 50.763 78.8459 63.9331 127.207 64.0003Z'
        fill='#D9D9D9'
      />
      <path
        d='M64.0001 0.793138C63.9325 49.4094 50.6238 64.0736 0 64.0003C49.2501 63.9247 64.0742 77.1022 64.0004 128C63.9248 78.7502 77.1023 63.9265 128 64.0002C79.0071 64.0755 64.0818 51.0351 64.0001 0.793138ZM64.0001 0.793138C64.0005 0.529756 64.0004 0.265378 64 0'
        stroke='black'
      />
    </svg>
  )
}

export default function Projects({}: Props) {
  const [projectData, setProjectData] = useState<Project[]>([])

  const getProjectData = () => {
    fetch('projects.json')
      .then((r) => {
        return r.json()
      })
      .then((json: Project[]) => {
        // json.map((project) => {
        //   project.img = `${pathToImages}${project.img}`
        //   return project
        // })
        setProjectData(json)
      })
  }

  useEffect(() => {
    getProjectData()
  }, [])

  return (
    <Container>
      <Stripes></Stripes>
      <Middle></Middle>
      <ShapeContainer>
        <SemiCircle>
          <Text>ui/ux</Text>
          <Text>projects</Text>
          {star(1)}
          {star(2)}
          {star(3)}
        </SemiCircle>
        <Oval></Oval>
      </ShapeContainer>
      <ProjectContainer>
        {projectData.map((proj, i) => (
          <Project key={proj.title} {...proj} idx={i + 1} />
        ))}
      </ProjectContainer>
    </Container>
  )
}
