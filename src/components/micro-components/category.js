import React from 'react'
import { Avatar, Box, Button, Flex, Link, Text, WashAnimated } from 'gestalt';

function Category({image, title}) {
  return (
<Flex
      alignItems="center"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Box maxWidth={236} padding={8} column={12}>
        <WashAnimated
          image={
            <Avatar
              name={title}
              src={image}
            />
          }
        >
          <Flex direction="column" justifyContent="center">
            <Text align="center" color="white">
              <Link href="#">
                <Box paddingX={3} paddingY={1}>
                  {title}
                </Box>
              </Link>
            </Text>
            {/* <Button
              accessibilityLabel="Follow James Jones"
              color="red"
              text="Follow"
            /> */}
          </Flex>
        </WashAnimated>
      </Box>
    </Flex>
  )
}

export default Category
