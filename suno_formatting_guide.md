# Suno AI Formatting Guide

## Vocalist Notation
- **Standard Format**: `VOCALIST: lyrics`
  - Example: `VOCALIST: I'm walking down this empty road`
- **Alternative Format**: `MAN:` or `WOMAN:` 
  - Example: `WOMAN: The stars are falling from the sky`
- **Vocal Range Hints**: `SOPRANO:`, `ALTO:`, `TENOR:`, `BASS:`
  - Example: `TENOR: Higher than mountains, deeper than sea`

## Vocal Expressions
- **[laughs]**, **[sighs]**, **[whispers]**, **[shouts]**, **[cries]**
- **[spoken]** for spoken word sections
- **[♪ ... ♪]** for explicit singing notation
- **—** or **...** for hesitation/pause

## Sound Effects
- Use **asterisks** for ambient/environmental sounds: 
  - Example: `*rain falling*`, `*door creaks*`, `*footsteps*`
- Use **brackets** for musical elements and transitions:
  - Example: `[beat drops]`, `[guitar solo]`, `[intense drums]`

## Structure Tags
- **[Verse]**, **[Chorus]**, **[Bridge]**, **[Intro]**, **[Outro]**
- **[Act I]**, **[Scene 1]** for theatrical/narrative compositions
- **[Solo]** for instrumental solo sections

## Metadata Block
```
[TITLE: Song Title]
[GENRES: Primary Genre, Secondary Genre]
[ARTIST: Artist Name]
[BPM: 120]
[KEY: C minor]
[INSTRUMENTS: Piano, Strings, Synth Bass]
[MOOD: Melancholic, Introspective]
[THEMES: Love, Loss, Redemption]
[REFERENCE: Song or Artist to emulate]
```

## Usage Best Practices
- Place metadata at the beginning of your prompt
- Capitalize tags consistently (e.g., [VERSE] not [verse])
- Use specific descriptive language for sound effects
- Balance structure with creative freedom
- For complex compositions, use narrative structure tags to guide progression

## Examples

### Basic Example
```
[TITLE: Ocean Dreams]
[GENRES: Ambient, Electronic]
[BPM: 85]

[Intro]
*gentle waves crashing*

VOCALIST: Drifting with the tide
VOCALIST: Stars reflect in endless blue

[Chorus]
VOCALIST: Ocean dreams calling me
VOCALIST: Deep beneath the waves I'm free
```

### Advanced Example
```
[TITLE: Shadows of Yesterday]
[GENRES: Cinematic, Orchestral, Dark Ambient]
[MOOD: Melancholic, Mysterious]
[INSTRUMENTS: Piano, Strings, Vocal]

[Intro]
*rain falling on window panes*
[soft piano melody]

[Verse 1]
WOMAN: Faces blur like watercolor
WOMAN: Memories... fading with time
*thunder rumbles in distance*

[Chorus]
SOPRANO: Where did all the shadows go?
SOPRANO: [whispers] They're hiding in yesterday
[string crescendo]

[Bridge]
*heartbeat intensifies*
[spoken] Time doesn't heal, it just conceals
```