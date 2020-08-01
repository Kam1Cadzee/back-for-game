import * as TypeGraphQL from "type-graphql";

export enum PartOfSpeech {
  ADJ = "ADJ",
  ADV = "ADV",
  CONJ = "CONJ",
  DET = "DET",
  MODAL = "MODAL",
  NOUN = "NOUN",
  PREP = "PREP",
  PRON = "PRON",
  VERB = "VERB",
  OTHER = "OTHER"
}
TypeGraphQL.registerEnumType(PartOfSpeech, {
  name: "PartOfSpeech",
  description: undefined,
});
