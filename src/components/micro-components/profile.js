import React from 'react'
import { Avatar, Box, Button, Flex, Link, Text, WashAnimated } from 'gestalt';

function Profile() {
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
              name="Nakib Azad"
              src="https://i.ibb.co/2Fc00R3/james.jpg"
            />
          }
        >
          <Flex direction="column" justifyContent="center">
            <Text align="center" color="white">
              <Link href="#">
                <Box paddingX={3} paddingY={1}>
                  Nakib Azad
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
  );
}

export default Profile