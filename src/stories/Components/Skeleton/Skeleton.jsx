import React from "react";
import { SkeletonParagraph } from "./SkeletonParagraph";
import { SkeletonInput } from "./SkeletonInput";
import { SkeletonAvatar } from "./SkeletonAvatar";
import { SkeletonImage } from "./SkeletonImage";
import { SkeletonButton } from "./SkeletonButton";
import { SkeletonTitle } from "./SkeletonTitle";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

const Children = styled.div`
  width: 100%;
`;

const Skeleton = (props) => {
  const { paragraph, avatar, active } = props;
  return (
    <Container>
      {avatar && <SkeletonAvatar active={active} />}
      <Children>
        <SkeletonTitle active={active} />
        <SkeletonParagraph
          rows={paragraph && paragraph.rows ? paragraph.rows : 3}
          active={active}
        />
      </Children>
    </Container>
  );
};

Skeleton.Input = SkeletonInput;
Skeleton.Button = SkeletonButton;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Image = SkeletonImage;
Skeleton.Title = SkeletonTitle;
Skeleton.Paragraph = SkeletonParagraph;

Skeleton.defaultProps = {
  avatar: false,
  active: false,
};

Skeleton.propTypes = {
  /**
   * Show avatar placeholder
   */
  avatar: PropTypes.bool,
  /**
   * Show animation effect
   */
  active: PropTypes.bool,
  /**
   * Show paragraph placeholder
   */
  paragraph: PropTypes.object,
};

export default Skeleton;
