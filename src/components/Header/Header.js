import React from 'react';
import styled from 'styled-components/macro';
import {Menu, Search, User} from 'react-feather';

import {QUERIES} from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
	return (
		<WrapHeader>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<Search size={24}/>
						</button>
						<button>
							<Menu size={24}/>
						</button>
					</ActionGroup>
					<ActionGroup>
						<UserButton>
							<button>
								<User size={24}/>
							</button>
						</UserButton>
						<ButtonWrapper>
							<Button>
								Subscripe
							</Button>
							<MemberLink>
								Allready a member?
							</MemberLink>
						</ButtonWrapper>
					</ActionGroup>
				</Row>
			</SuperHeader>
			<MainHeader>
				<Logo/>
			</MainHeader>
		</WrapHeader>
	);
};


const WrapHeader = styled.header`
  @media (min-width: 1440px) {
	padding-top: 12px;
	padding-bottom: 72px;
		
  }
`;


const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
  @media (min-width: 1440px) {
	background-color: transparent;
	color: var(--color-gray-900);
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;
  
  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  
  svg {
	display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  @media (min-width: 1440px) {
	margin-top: -100px;
	margin-bottom: 0;
  }
`;

const UserButton = styled.div`
	display: block;
	@media (min-width: 1440px) {
		display: none;
  }
`;

const ButtonWrapper = styled.div`
  display: none;
  @media (min-width: 1440px) {
	display: flex;
	flex-direction: column;
	align-items: center;
		gap: 5px;
  }
`;
const MemberLink = styled.a`
  font-style: italic;
  font-size: 18px;
  text-decoration: underline;

`;

export default Header;
