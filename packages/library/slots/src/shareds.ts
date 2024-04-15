import { String as S, ReadonlyArray as A, Option as O, pipe } from "effect";

export const snakeToPascal = (string: string) =>
	pipe(
		string,
		S.split("_"),
		A.map(
			(snake) =>
				pipe(
					snake,
					S.charAt(0),
					O.getOrElse(() => ""),
					S.toUpperCase,
				) + S.slice(1)(snake),
		),
		A.join(""),
	);
