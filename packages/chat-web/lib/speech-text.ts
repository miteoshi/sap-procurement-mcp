/**
 * Turn model output into something pleasant to hear, and cut a growing
 * (streaming) answer into sentences so speech can start before the reply ends.
 */

export function cleanForSpeech(input: string): string {
  return (
    input
      .replace(/```[\s\S]*?```/g, " ")
      .replace(/`([^`]*)`/g, "$1")
      .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/^\s{0,3}#{1,6}\s+/gm, "")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/^\s*\d+[.)]\s+/gm, "")
      .replace(/(\*\*|__|\*)/g, "") // single "_" is kept: PO_42, FMCG_001
      .replace(/^\s*\|.*\|\s*$/gm, " ") // table rows read badly aloud
      // Engines spell "INR" letter by letter; say it as a person would.
      .replace(/(?:INR|Rs\.?|₹)\s*([\d,]+(?:\.\d+)?)/g, "$1 rupees")
      .replace(/\s+/g, " ")
      .trim()
  )
}

// A boundary is a sentence terminator FOLLOWED BY whitespace (so "128.50" is not
// split, and a "." at the very end of the buffer waits for the next token), or a newline.
const BOUNDARY = /[.!?।]+(?=\s)|\n+/g
const MIN_CHUNK = 20

/**
 * Returns the complete sentences found in `text` after index `from`, and the
 * new cursor. With `final`, whatever is left is flushed too.
 */
export function takeSentences(text: string, from: number, final: boolean) {
  const sentences: string[] = []
  let cursor = from

  BOUNDARY.lastIndex = from
  let match: RegExpExecArray | null
  while ((match = BOUNDARY.exec(text)) !== null) {
    const end = match.index + match[0].length
    const piece = text.slice(cursor, end)
    // Very short pieces ("Rs." / "No.") are kept and joined with the next one.
    if (piece.trim().length < MIN_CHUNK && end < text.length) continue
    const cleaned = cleanForSpeech(piece)
    if (cleaned) sentences.push(cleaned)
    cursor = end
  }

  if (final && cursor < text.length) {
    const cleaned = cleanForSpeech(text.slice(cursor))
    if (cleaned) sentences.push(cleaned)
    cursor = text.length
  }

  return { sentences, next: cursor }
}

export function humanizeToolName(name: string): string {
  const spaced = name.replace(/_/g, " ").trim()
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}
