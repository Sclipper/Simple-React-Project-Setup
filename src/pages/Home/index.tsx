import { Box, Button, Card, Flex, Grid, Separator, Text } from '@radix-ui/themes'
import { Link } from '@tanstack/react-router'
import './Home.styles.css'

function Home() {
  const customTools = []

  const dataTools = customTools.filter((tool) => tool.type === 'data')
  // const adminTools = customTools.filter((tool) => tool.type === 'admin')

  return (
    <Flex>
      <Card variant="classic">
        <Flex p="4" direction="column" gap="3">
          <Text size="2" weight="bold">
            Data extraction
          </Text>
          <Text size="2">Here you can find all the tools to extract data from the system.</Text>
        </Flex>
        <Separator size="4" />

        {dataTools.map((tool, index) => (
          <Box key={tool.title}>
            <Grid
              m="3"
              style={{
                height: '100px',
              }}
              columns="1fr 9fr 2fr"
              gap="3"
              width="auto"
              align="center"
            >
              <Flex width="100%" height="100%" overflow="hidden" align="center" justify="center">
                {tool.icon}
              </Flex>
              <Flex direction="column" gap="2">
                <Text weight="bold">{tool.title}</Text>
                <Text>{tool.description}</Text>
              </Flex>
              <Link to={tool.url ?? ''}>
                <Button>Select feature</Button>
              </Link>
            </Grid>
            {index !== dataTools.length - 1 && <Separator size="4" />}
          </Box>
        ))}
      </Card>
    </Flex>
  )
}

export default Home
