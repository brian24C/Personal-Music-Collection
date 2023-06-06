import {
  ChatIcon,
  EmailIcon,
  ExternalLinkIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Flex,
  Link,
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
  Text,
} from "@chakra-ui/react";
import Uploader from "../components/Uploader";

export default function Profile() {
  const songsFavorites = [
    {
      name: "Of Monsters and Men - The Cabin Sessions",
      link: "https://www.youtube.com/watch?v=Y25LDO6OLzQ",
    },
    {
      name: "4 Non Blondes - What's Up",
      link: "https://www.youtube.com/watch?v=6NXnxTNIWkc",
    },
    {
      name: "Fooled Around And Fell In Love/ Elvin Bishop",
      link: "https://www.youtube.com/watch?v=DyMMEmwFQUE",
    },
    {
      name: "Post Malone, Swae Lee - Sunflower",
      link: "https://www.youtube.com/watch?v=ApXoWvfEYVU&list=RDMM&start_radio=1&rv=P3cffdsEXXw",
    },
    {
      name: "Men I Trust - Tailwhip",
      link: "https://www.youtube.com/watch?v=9IZKcb3LndA&list=RD9IZKcb3LndA&start_radio=1",
    },
    {
      name: "Michael Jackson - Rock With You",
      link: "https://www.youtube.com/watch?v=5X-Mrc2l1d0",
    },
  ];
  return (
    <Box>
      <Uploader />
      <Tabs mt="40px" p="20px" variant="enclosed">
        <TabList>
          <Tab _selected={{ color: "white", bg: "blue.400" }}>Account Info</Tab>
          <Tab _selected={{ color: "white", bg: "blue.400" }}>
            My Favorite songs
          </Tab>
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
              {songsFavorites.map((song) => {
                return (
                  <ListItem key={song.name}>
                    <Flex alignItems="center">
                      <ListIcon
                        as={HamburgerIcon}
                        color="teal.400"
                        marginRight="0.5rem"
                      />
                      {song.name}
                      <Link href={song.link} isExternal>
                        <ListIcon
                          as={ExternalLinkIcon}
                          color="teal.400"
                          marginLeft="0.5rem"
                        />
                      </Link>
                    </Flex>
                  </ListItem>
                );
              })}
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
