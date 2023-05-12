import {
  ChatIcon,
  EmailIcon,
  StarIcon,
  CheckCircleIcon,
  WarningIcon,
  HamburgerIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  List,
  ListItem,
  ListIcon,
  Flex,
  Link,
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "blue.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "blue.400" }}>Favorite songs</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: brianjosuecastro@hotmail.com
            </ListItem>

            <ListItem>
              <ListIcon as={ChatIcon} />
              Discipline but more importantly, constancy
            </ListItem>

            {/* <ListItem>
              <ListIcon as={StarIcon} />
              
            </ListItem> */}
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon
                  as={HamburgerIcon}
                  color="teal.400"
                  marginRight="0.5rem"
                />
                This Is The Life - Amy Macdonald
                <Link
                  href="https://www.youtube.com/watch?v=iRYvuS9OxdA"
                  isExternal
                >
                  <ListIcon
                    as={ExternalLinkIcon}
                    color="teal.400"
                    marginLeft="0.5rem"
                  />
                </Link>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon
                  as={HamburgerIcon}
                  color="teal.400"
                  marginRight="0.5rem"
                />
                Fooled Around And Fell In Love/ Elvin Bishop
                <Link
                  href="https://www.youtube.com/watch?v=JoPZMsjp8Dc"
                  isExternal
                >
                  <ListIcon
                    as={ExternalLinkIcon}
                    color="teal.400"
                    marginLeft="0.5rem"
                  />
                </Link>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon
                  as={HamburgerIcon}
                  color="teal.400"
                  marginRight="0.5rem"
                />
                Sunsetz
                <Link
                  href="https://www.youtube.com/watch?v=5-rbSNzU_b8"
                  isExternal
                >
                  <ListIcon
                    as={ExternalLinkIcon}
                    color="teal.400"
                    marginLeft="0.5rem"
                  />
                </Link>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon
                  as={HamburgerIcon}
                  color="teal.400"
                  marginRight="0.5rem"
                />
                The Lumineers - The Ballad Of Cleopatra
                <Link
                  href="https://www.youtube.com/watch?v=tXsQJhoauxc&t=1s"
                  isExternal
                >
                  <ListIcon
                    as={ExternalLinkIcon}
                    color="teal.400"
                    marginLeft="0.5rem"
                  />
                </Link>
              </Flex>
            </ListItem>
            <ListItem>
              <Flex alignItems="center">
                <ListIcon
                  as={HamburgerIcon}
                  color="teal.400"
                  marginRight="0.5rem"
                />
                Mardy Bum - Arctic Monkeys
                <Link
                  href="https://www.youtube.com/watch?v=dO368WjwyFs&list=RDMM&start_radio=1&rv=tXsQJhoauxc"
                  isExternal
                >
                  <ListIcon
                    as={ExternalLinkIcon}
                    color="teal.400"
                    marginLeft="0.5rem"
                  />
                </Link>
              </Flex>
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
