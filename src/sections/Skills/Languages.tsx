import ContainerVH100 from 'components/ContainerVH100';
import ContainerVH50 from 'components/ContainerVH50';
import ContainerVHCustomSkills from 'components/ContainerVHCustomSkills';
import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { breakpoints } from 'variables/_variables';

const StyledContainer = styled(Container)``;

const StyledSkillList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	@media (min-width: ${breakpoints.sm}) {
		flex-direction: row;
		margin-left: 0;
	}
`;
const StyledNameLocal = styled.h1`
	background-image: linear-gradient(
		-225deg,
		#3a2a77 0%,
		#65339b 29%,
		#fd6598 67%,
		#b9b651 100%
	);
	background-size: auto auto;
	background-clip: border-box;
	background-size: 100% auto;
	color: #fff;
	background-clip: text;
	-text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: textclip 2s linear infinite;
	display: inline-block;

	@keyframes textclip {
		to {
			background-position: 200% center;
		}
	}
`;

const LangSkills = () => {
	return (
		<ContainerVHCustomSkills>
			<StyledContainer>
				<StyledSkillList>
					<ul className='skills-list-langugages'>
						<StyledNameLocal>Languages:</StyledNameLocal>
						<li>Javascript/Typescript</li>
						<li>Python</li>
						<li>Solidity</li>
						<li>HTML/CSS</li>
						<li>Shell-scripting</li>
						<li>C#</li>
					</ul>
				</StyledSkillList>
			</StyledContainer>
		</ContainerVHCustomSkills>
	);
};

export default LangSkills;
