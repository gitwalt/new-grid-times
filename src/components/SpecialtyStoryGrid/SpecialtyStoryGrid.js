import React from 'react';
import styled from 'styled-components/macro';

import {MARKET_DATA, SPORTS_STORIES} from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import {QUERIES} from "../../constants";

const SpecialtyStoryGrid = () => {
	return (
		<Wrapper>
			<MarketsSection>
				<SectionTitle
					cornerLink={{
						href: '/markets',
						content: 'Visit Markets data »',
					}}
				>
					Markets
				</SectionTitle>
				<MarketCards>
					{MARKET_DATA.map((data) => (
						<MarketCard key={data.tickerSymbol} {...data} />
					))}
				</MarketCards>
			</MarketsSection>
			<SportsSection>
				<SectionTitle
					cornerLink={{
						href: '/sports',
						content: 'Visit Sports page »',
					}}
				>
					Sports
				</SectionTitle>
				<SportsStories>
					{SPORTS_STORIES.map((data) => (
						<SportStoryWrapper key={data.id}>
							<MiniStory {...data}/>
						</SportStoryWrapper>
					))}
				</SportsStories>
			</SportsSection>
		</Wrapper>
	);
};

const Wrapper = styled.div`
  display: grid;
  gap: 48px;
  @media screen and ${QUERIES.tabletAndUp} {
	gap: 64px;
		// grid-template-columns: minmax(0px, auto);
		grid-template-columns: 100%;  
	}
  @media screen and ${QUERIES.laptopAndUp} {
		gap: 0;
		grid-template-columns: 1fr minmax(0px, 1fr);
  }
`;

const MarketsSection = styled.section`
  @media screen and ${QUERIES.laptopAndUp} {
		padding-right: 16px;
		margin-right: 16px;
		border-right: 1px solid var(--color-gray-300);
  }
`;

const MarketCards = styled.div`
  	display: grid;
  	gap: 16px;
  	grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
`;

const SportsSection = styled.section``;

const SportsStories = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  @media screen and ${QUERIES.tabletAndUp} {
		display: flex;
		grid-template-columns: revert;
		overflow: auto;
  }
`;

const SportStoryWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;

export default SpecialtyStoryGrid;
