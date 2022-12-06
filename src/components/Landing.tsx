import styled from 'styled-components'
import useMousePosition from '../hooks/MousePosition'
import useWindowDimensions from '../hooks/WindowSize'

const Curtain = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .text {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font: 600 italic 18vh 'Bodoni Mona';
    letter-spacing: 1vh;
    transition: all 0.2s linear;
    &:nth-child(odd) {
      color: ${(props) => props.theme.dark};
    }
    &:nth-child(even) {
      color: ${(props) => props.theme.primary};
    }
  }
`

export default function Landing() {
  const mousePosition = useMousePosition()
  const { height, width } = useWindowDimensions()
  const shift = 10 * (mousePosition.x / width + mousePosition.y / height - 1)
  // console.log(shift)
  return (
    <Curtain>
      <div className='text' style={{ transform: `translateX(${shift}vw)` }}>
        SOMBERSHEEPSOMBERSHEEPSOMBERSHEEPSOMBERSHEEPSOMBERSHEEPSOMBERSHEEP
      </div>
      <div className='text' style={{ transform: `translateX(${-shift}vw)` }}>
        PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO
      </div>
      <div className='text' style={{ transform: `translateX(${shift}vw)` }}>
        SOMBERSHEEPSOMBERSHEEPSOMBERSHEEPSOMBERSHEEPSOMBERSHEEPSOMBERSHEEP
      </div>
      <div className='text' style={{ transform: `translateX(${-shift}vw)` }}>
        PORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIOPORTFOLIO
      </div>
      <div className='text' style={{ transform: `translateX(${shift}vw)` }}>
        SOMBERSHEEPSOMBERSHEEPSOMBERSHEEPSOMBERSHEEPSOMBERSHEEPSOMBERSHEEP
      </div>
    </Curtain>
  )
}
