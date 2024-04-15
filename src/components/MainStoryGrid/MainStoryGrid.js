import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
        {SECONDARY_STORIES.map((story, index) => (
          <SepatarionGray key={story.id}>
          <SecondaryStory  {...story} />
          </SepatarionGray>
          
            
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
      
        <StoryList>
          <Opiniowrapper>
          {OPINION_STORIES.map((story, index) => (
          <SepatarionGrayOpinion key={story.id} >
            <OpinionStory {...story} />
          </SepatarionGrayOpinion>
          ))}
          </Opiniowrapper>
          
        </StoryList>
        
       
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;

  @media${QUERIES.tabletAndUp}{
    display: grid;
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories'
    ;
    grid-template-columns:2fr 1fr;
    gap: 48px 0px;
    
  }

  @media${QUERIES.laptopAndUp}{
    display: grid;
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    grid-template-columns:3fr 2fr 1fr;
    gap: 0px;
  }

`;

const MainStorySection = styled.section`
  grid-area: main-story;
  
  @media${QUERIES.tabletAndUp}{
    padding-right:16px;
    margin-right:16px;
    border-right:solid 2px var(--color-gray-300);
  }

`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media${QUERIES.laptopAndUp}{
    padding-right:16px;
    margin-right:16px;
    border-right:solid 2px var(--color-gray-300);
    gap:32px;
  }
  
`;

const StoryList = styled.div`
  display:flex;
  flex-direction:column;
  
`;

const Opiniowrapper =styled.div`
@media${QUERIES.tabletOnly}{
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  gap:32px;
  
}
`
const OpinionSection = styled.section`
  grid-area: opinion-stories;
  
  @media${QUERIES.tabletAndUp}{
    margin-top:-9px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;  

  @media${QUERIES.laptopAndUp}{
    padding-top:16px;
    margin-top:16px;
    border-top:solid 2px var(--color-gray-300);
  }
`;
const SepatarionGray = styled.div`
&:not(:last-of-type){
  border-bottom:solid 1px var(--color-gray-300);
  padding-bottom:16px;
  margin-bottom:16px;
`
const SepatarionGrayOpinion =styled(SepatarionGray)`
@media${QUERIES.tabletOnly}{

  &:not(:last-of-type){
    border-bottom:revert;
    padding-bottom:revert;
    margin-bottom:revert;
}

`
export default MainStoryGrid;
