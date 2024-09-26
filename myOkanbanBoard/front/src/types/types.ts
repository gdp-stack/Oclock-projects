export interface CardHasTagType {
  created_at: string;
  updated_at: string;
  card_id: number;
  tag_id: number;
}

export interface TagType {
  id: number;
  name: string;
  color: string;
  created_at: string;
  updated_at: string;
  card_has_tag: CardHasTagType;
}

export interface CardType {
  id: number;
  content: string;
  position: number;
  color: string;
  created_at: string;
  updated_at: string;
  list_id: number | null;
  tags: TagType[];
}

export interface ListType {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  cards: CardType[];
}
