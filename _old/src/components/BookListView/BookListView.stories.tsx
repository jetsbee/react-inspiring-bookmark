import type { Meta, StoryObj } from "@storybook/react";
import BookListView from "./BookListView";

interface BooksDB {
  [isbn: string]: any;
}

export const BooksMockDB: BooksDB = {
  "9781649374042": {
    id: "6_CLEAAAQBAJ",
    title: "Fourth Wing",
    authors: ["Rebecca Yarros"],
    publishedDate: "2023-05-02",
    description:
      "As war grows more deadly, Violet Sorrengail joins the elite Navarre: the dragon riders. But she'll need to keep her wits because once you enter the Basgiath War College, there are only two ways out: graduate or die.",
    imageLinks: {
      thumbnail:
        "http://books.google.com/books/content?id=6_CLEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
  },
  "9780316258777": {
    id: "DdtjzwEACAAJ",
    title: "The Five-Star Weekend",
    authors: ["Elin Hilderbrand"],
    publishedDate: "2023-06-13",
    description:
      "Hollis Shaw, creator of the popular food blog, Hungry with Hollis, is shocked when her heart surgeon husband, Matthew, is killed in a one-car accident on a snowy February morning. In Hollis's search for comfort, she hears about something called the \"Five Star\" weekend - a woman invites her best friend from each stage of her life - her teenage years, her twenties, her thirties and mid-life. Hollis decides she will host such a weekend on Nantucket--but her weekend won't be the Hallmark movie that one might expect... There's Tatum, Hollis's best friend from growing up on Nantucket, whose husband invites his childhood best friend and Hollis's first love, Jack Finigan, to spend time with them, stirring up old feelings... ...Dru-ann, Hollis's best friend from from UNC Chapel Hill, now a prominent Black female sports agent in Chicago whose comments about a client's mental health are misconstrued and land her in hot Twitter storm, making her in danger of losing her job and her boyfriend right before the weekend... ...Brooke, Hollis's best friend who helped raise her kids with Hollis during their thirties in Wellesley, MA, who was previously ousted from the Wellesley mom friend group by the leader, Electra, and will be meeting up with Electra this weekend for drinks on Nantucket to make amends... ...and Gigi, who reached out to Hollis on her food blog to become \"internet besties.\" (No one knows Gigi, not even Hollis.) All the while during their stay, Hollis's daughter Caroline - an NYU documentary student - is filming the entire weekend and conducting interviews with each of the women in the hopes of making a short film. Caroline has just ended her first adult relationship, an affair with Ghanaian documentarian Isaac Opoku, and she bumps into her teenage crush Dylan McKenzie (Tatum's son) at the airport. With so much unresolved within each of Hollis's friendships and her daughter, and amid Hollis's own turning point after losing Matthew, what could potentially go wrong? Filled with the emotional depth and trademark cast-of-characters perspective of Hilderbrand's novels, The Five-Star Weekend promises a story of a remarkable weekend between friends--old and new--like no other.",
    imageLinks: {
      thumbnail:
        "http://books.google.com/books/content?id=DdtjzwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    },
  },
};

const meta: Meta<typeof BookListView> = {
  title: "BookListView",
  component: BookListView,
  tags: ["autodocs"],
  excludeStories: /.*BooksMockDB$/,
};

export default meta;
type Story = StoryObj<typeof BookListView>;

export const Default: Story = {
  args: {
    books: Object.values(BooksMockDB),
  },
};
