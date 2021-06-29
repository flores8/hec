import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import {
  font,
  spacing,
  gray,
  borderRadius,
  transition,
  boxShadow,
} from "../../utils";
import SlideUpLink from "../../components/Links/SlideUpLink";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Post = ({ frontmatter }) => {
  const { title, subtitle, slug, date, image } = frontmatter;
  console.log(image);
  return (
    <PostLink to={`/blog/${slug}`}>
      <PostsWrapper className="flow">
        <ImageWrapper>
          <GatsbyImage
            image={getImage(image.childrenImageSharp[0])}
            alt={title}
            height={200}
          />
        </ImageWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Footer>
          <SlideUpLink
            link={`/blog/${slug}`}
            title={"Read article"}
            arrow={"true"}
            color={"yellow"}
          />
          <Date>{date}</Date>
        </Footer>
      </PostsWrapper>
    </PostLink>
  );
};

export default Post;

const PostLink = styled(Link)`
  text-decoration: none;
  padding: ${spacing.s6};
  border-radius: ${borderRadius.md};
  transition: ${transition.slow};
  &:hover {
    box-shadow: ${boxShadow.md};
  }
`;

const PostsWrapper = styled.section`
  --flow-space: ${spacing.s5};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ImageWrapper = styled.div`
  max-height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: ${borderRadius.md};
`;

const Title = styled.h3`
  font-size: ${font.s6};
  line-height: 1.2;
  font-weight: bold;
  color: ${gray.five};
`;

const Subtitle = styled.p`
  font-size: ${font.s20};
  color: ${gray.five};
`;

const Footer = styled.div`
  justify-self: flex-end;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Date = styled.span`
  font-size: ${font.s4};
  color: ${gray.four};
  letter-spacing: 1px;
  text-transform: uppercase;
`;
