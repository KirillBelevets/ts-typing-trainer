import { NextRequest, NextResponse } from "next/server";
import { Project } from "ts-morph";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDiagnosticText(input: any): string {
  if (!input) return "Unknown error";

  if (typeof input === "string") return input;

  if (typeof input.getMessageText === "function") {
    return getDiagnosticText(input.getMessageText());
  }

  if (typeof input.messageText === "string") {
    const nextText = input.next
      ? input.next.map(getDiagnosticText).join(" ")
      : "";
    return input.messageText + (nextText ? " " + nextText : "");
  }

  return "Unknown diagnostic format";
}

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    const project = new Project({
      useInMemoryFileSystem: true,
      compilerOptions: {
        noEmit: true,
        strict: true,
        target: 99, // ESNext
      },
    });

    const file = project.createSourceFile("temp.ts", code);

    const diagnostics = file.getPreEmitDiagnostics();

    const errors = diagnostics.map((d) =>
      getDiagnosticText(d.getMessageText())
    );
    console.log("⚠️ TypeScript Errors:", errors);

    return NextResponse.json({ errors });
  } catch (err) {
    console.error("❌ TypeScript check error:", err);
    return NextResponse.json(
      { errors: ["Something went wrong."] },
      { status: 500 }
    );
  }
}
