import { assertEquals } from "std/assert/mod.ts";
import { TwindPlugin } from "./plugin.ts";

Deno.test(TwindPlugin.name, async (t) => {
  await t.step("should use loaded config file", async () => {
    const Plugin = await TwindPlugin();
    const plugin = await Plugin.plugin({ assetsPath: "test" });
    assertEquals(Plugin.name, "Twind Plugin");
    assertEquals(plugin.tasks?.afterRender?.length, 1);
  });
  await t.step("should use input config options", async () => {
    const Plugin = await TwindPlugin({
      preflight: { body: { color: "blue" } },
    });
    const plugin = await Plugin.plugin({ assetsPath: "test" });
    assertEquals(Plugin.name, "Twind Plugin");
    assertEquals(plugin.tasks?.afterRender?.length, 1);
  });
});
