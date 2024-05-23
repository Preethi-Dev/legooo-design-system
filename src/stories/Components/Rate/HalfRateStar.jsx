import { FilledStar } from "./FilledStar";
import { EmptyStar } from "./EmptyStar";
import { nanoid } from "nanoid";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { generateStarArray } from "./Rate.helpers";

const Container = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  position: relative;
  font-size: 1.25rem;
  text-align: left;
  cursor: pointer;
`;

const HalfRateStarContainer = styled.div`
  position: relative;
  min-width: 1.4rem;
  min-height: 2rem;
  &:hover {
    font-size: 1.35rem;
  }
`;

export const HalfRateStar = ({ character, count, disabled, value }) => {
  const [currentStar, setcurrentStar] = useState(value + 0.5);
  const [stars, setStars] = useState(generateStarArray(count, currentStar));
  const ratingContainerRef = useRef(null);
  const precision = 0.5;

  const calculateRating = (e) => {
    const { width, left } = ratingContainerRef.current.getBoundingClientRect();
    const percent = (e.clientX - left) / width;
    const numberInStars = percent * count;
    const nearestNumber =
      Math.round((numberInStars + precision / 2) / precision) * precision;
    return nearestNumber;
  };

  const handleClick = (e) => {
    if (!disabled) {
      const activeStar = calculateRating(e);
      activeStar === currentStar
        ? setcurrentStar(0)
        : setcurrentStar(activeStar);
      activeStar === currentStar
        ? setStars([...new Array(count)].fill(0))
        : setStars(generateStarArray(count, activeStar));
    }
  };

  const handleMounseEnter = (e) => {
    if (!disabled) {
      if (e.target.closest("svg")) {
        const activeStar = calculateRating(e);
        setStars(generateStarArray(count, activeStar));
      }
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setStars(generateStarArray(count, currentStar));
    }
  };

  useEffect(() => {
    console.log(currentStar);
  }, [currentStar]);

  return (
    <Container
      ref={ratingContainerRef}
      onClick={handleClick}
      onMouseLeave={handleMouseLeave}
    >
      {stars.map((star) => (
        <HalfRateStarContainer key={nanoid()} onMouseMove={handleMounseEnter}>
          <div
            style={{
              width: star === 1 ? "100%" : star === 0.5 ? "50%" : "0%",
              overflow: "hidden",
              position: "absolute",
            }}
          >
            <FilledStar character={character} />
          </div>
          <div>
            <EmptyStar character={character} />
          </div>
        </HalfRateStarContainer>
      ))}
    </Container>
  );
};
