import { Indexed } from "../types/indexed";
import merge from "./merge";

function set(
  object: Indexed | unknown,
  path: string,
  value: unknown
): Indexed | unknown {
  if (typeof object !== "object" || object === null) {
    console.log('tutaaa')
    return object;
  }

  if (typeof path !== "string") {
    throw new Error("path must be string");
  }

  console.log(object, path, value)

  const result = path.split(".").reduceRight<Indexed>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any
  );
  console.log('tutaaa', result)
  return merge(object as Indexed, result);
}

export default set;
