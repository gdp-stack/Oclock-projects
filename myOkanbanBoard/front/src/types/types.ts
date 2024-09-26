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
  card_has_tag: CardHasTagType; // Relation entre la carte et le tag
}

export interface CardType {
  id: number;
  content: string;
  position: number;
  color: string;
  created_at: string;
  updated_at: string;
  list_id: number | null; // Peut être null si la carte n'a pas de liste
  tags: TagType[]; // Tableau de tags associés à la carte
}

export interface ListType {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  cards: CardType[]; // Tableau de cartes associées à la liste
}
