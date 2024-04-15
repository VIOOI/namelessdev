import * as S from "@effect/schema/Schema";
import { Text } from "@namelessdev/typography";

const URLShema = S.struct({
  searchParams: S.struct({
    io1: S.optional(
      S.string.pipe(S.transform(S.boolean, (n) => n == "true", String)),
      {
        default: () => false,
      },
    ),
  }),
});

const URLDecoder = S.decodeSync(URLShema);

export default async function Page(RURL: S.Schema.From<typeof URLShema>) {
  return (
    <div className="w-screen h-screen bg-neutral-900 text-white p-5">
      <Text>Hello</Text>
    </div>
  );
}
