import styled from 'styled-components';
import tw from 'twin.micro';

const Button = styled.button`
    ${tw`bg-blue-500 text-white font-semibold py-2 px-4 rounded`}

    &:hover {
        ${tw`bg-blue-900`}
    }
`;