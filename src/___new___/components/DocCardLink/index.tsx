import { Card, CardBody, CardHeader, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { theme } from '../../theme';
import { ChakraProvider } from '@chakra-ui/react';
import { useDocById } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import { cardBodyStyles, cardHeaderStyles, cardStyles, cardTextStyles, headingStyles, linkStyles } from './styles';
import { useDocUrl } from '../../hooks';

type DocCardLinkProps = {
  docId: string;
  title?: string;
  description?: string;
};

const CardLink: React.FC<DocCardLinkProps> = ({ docId, title, description }) => {
  const doc = useDocById(docId);
  const href = useDocUrl(docId);

  return (
    <ChakraProvider theme={theme}>
      <Link
        href={href}
        style={linkStyles}
      >
        <Card sx={cardStyles}>
          <CardHeader sx={cardHeaderStyles}>
            <Heading sx={headingStyles}>{title ?? doc.title}</Heading>
          </CardHeader>
          <CardBody sx={cardBodyStyles}>
            <Text sx={cardTextStyles}>{description ?? doc.description}</Text>
          </CardBody>
        </Card>
      </Link>
    </ChakraProvider>
  );
};

export default CardLink;
