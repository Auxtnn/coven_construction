import { type SchemaTypeDefinition } from "sanity";
import {
  twoBungalowType,
  threeBungalowType,
  fourBungalowType,
  fiveBungalowType,
  sixBungalowType,
  twoDuplexType,
  threeDuplexType,
  fourDuplexType,
  fiveDuplexType,
  sixDuplexType,
  twoFlatType,
  threeFlatType,
  fourFlatType,
  fiveFlatType,
  sixFlatType,
} from ".";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    twoBungalowType,
    threeBungalowType,
    fourBungalowType,
    fiveBungalowType,
    sixBungalowType,
    twoDuplexType,
    threeDuplexType,
    fourDuplexType,
    fiveDuplexType,
    sixDuplexType,
    twoFlatType,
    threeFlatType,
    fourFlatType,
    fiveFlatType,
    sixFlatType,
  ],
};
