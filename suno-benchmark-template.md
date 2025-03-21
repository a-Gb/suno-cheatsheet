# Suno AI Benchmark Templates

## Core Lyrics (Baseline)

```
Morning light filters through the window
Another day begins to unfold
The city wakes from slumber
As stories waiting to be told

Time moves forward, never backward
Moments passing one by one
We chase the fading shadows
Until the day is done

Looking back at memories
Scattered like photographs
Some clear as yesterday
Others fading fast

Time moves forward, never backward
Moments passing one by one
We chase the fading shadows
Until the day is done

The future's never certain
The past cannot be changed
Only this moment matters
As our lives rearrange
```

## Genre Baseline (Pop)

```
Genre: Pop
Mood: Reflective, Hopeful
```

## Template 1: Minimal Control

This template uses minimal formatting and control parameters - just the basics to get a song created with the specified genre and lyrics.

```
[TITLE: Passing Time]
[GENRES: Pop]

Morning light filters through the window
Another day begins to unfold
The city wakes from slumber
As stories waiting to be told

Time moves forward, never backward
Moments passing one by one
We chase the fading shadows
Until the day is done

Looking back at memories
Scattered like photographs
Some clear as yesterday
Others fading fast

Time moves forward, never backward
Moments passing one by one
We chase the fading shadows
Until the day is done

The future's never certain
The past cannot be changed
Only this moment matters
As our lives rearrange
```

## Template 2: Standard Control

This template adds basic structure, vocalist notation, and simple style guidance.

```
[TITLE: Passing Time]
[GENRES: Pop]
[MOOD: Reflective, Hopeful]

Style: Modern pop with piano and light percussion, warm vocals

[Verse 1]
VOCALIST: Morning light filters through the window
VOCALIST: Another day begins to unfold
VOCALIST: The city wakes from slumber
VOCALIST: As stories waiting to be told

[Chorus]
VOCALIST: Time moves forward, never backward
VOCALIST: Moments passing one by one
VOCALIST: We chase the fading shadows
VOCALIST: Until the day is done

[Verse 2]
VOCALIST: Looking back at memories
VOCALIST: Scattered like photographs
VOCALIST: Some clear as yesterday
VOCALIST: Others fading fast

[Chorus]
VOCALIST: Time moves forward, never backward
VOCALIST: Moments passing one by one
VOCALIST: We chase the fading shadows
VOCALIST: Until the day is done

[Bridge]
VOCALIST: The future's never certain
VOCALIST: The past cannot be changed
VOCALIST: Only this moment matters
VOCALIST: As our lives rearrange

[Outro]
VOCALIST: Until the day is done
```

## Template 3: Advanced Control

This template adds detailed technical parameters, specific styling, instrumentation, vocal direction, and dynamic changes.

```
<details>
temp=0.82
cfg=7.5
key=Gmajor
time_signature=4/4
bpm=95
</details>

[TITLE: Passing Time]
[GENRES: Pop, Indie Pop]
[MOOD: Reflective, Hopeful, Introspective]
[ARTIST: Benchmark Vocals]
[INSTRUMENTS: Piano, Acoustic Guitar, Light Percussion, Strings]

Style: Modern indie pop with airy atmospheric elements, warm vocals with subtle reverb, minimalist piano intro, building to full arrangement, cinematic strings in bridge
Exclude: Heavy distortion, aggressive drums, spoken word, electronic beats

[Intro]
*soft piano melody*
[gentle string swell]

[Verse 1]
[Female Vocal]
Morning light filters through the window
Another day begins to unfold
The city wakes from slumber
As stories waiting to be told

[Pre-Chorus]
[Build]
[light percussion enters]

[Chorus]
[Intensify]
Time moves forward, never backward
Moments passing one by one
We chase the fading shadows
Until the day is done

[Interlude]
[Orchestral]
(gentle piano and strings)

[Verse 2]
[Female Vocal]
Looking back at memories
Scattered like photographs
Some clear as yesterday
[whispers] Others fading fast

[Chorus]
[Harmonies]
Time moves forward, never backward
Moments passing one by one
We chase the fading shadows
Until the day is done

[Bridge]
[Build Intensity]
[String Section]
The future's never certain
The past cannot be changed
Only this moment matters
As our lives rearrange

[Chorus]
[Layer Vocals]
Time moves forward, never backward
Moments passing one by one
We chase the fading shadows
Until the day is do-o-one

[Outro]
[Decrescendo]
[Female Vocal]
[Whisper] Until the day is done
[Fade Out]
```

## Service Adaptation Guide

To adapt these templates for different AI music generation services:

### For Services with Minimal Control (e.g., Basic Text-to-Music)
- Use Template 1
- Remove any Suno-specific tags ([TITLE], [GENRES])
- Format as plain text with line breaks between sections

### For Services with Moderate Control
- Use Template 2
- Replace [Tags] with service-specific section markers
- Replace VOCALIST with service-specific voice markers
- Adapt Style text to match service capabilities
- Keep core lyrics and structure intact

### For Services with Advanced Control
- Use Template 3 as starting point
- Replace <details> section with service-specific parameter controls
- Translate Suno-specific tags to service equivalents:
  * [Female Vocal] → Service-specific voice selection
  * [Build], [Intensify] → Service-specific dynamic markers
  * Sound effects (*piano*) → Service-specific sound effect notation
  * [Harmonies], [Layer Vocals] → Service-specific vocal layering commands
  
### Common Adaptation Points
1. **Technical Parameters**: tempo, key, time signature
2. **Voice Type**: female/male, vocal range
3. **Instrumentation**: piano, guitar, percussion, strings
4. **Dynamics**: build, intensify, fade
5. **Effects**: reverb, layering, harmonies
6. **Structure**: verse, chorus, bridge, outro

## Benchmark Criteria

When comparing outputs across different services:

1. **Lyrical Accuracy**: How well were the lyrics followed?
2. **Structural Adherence**: Did the music follow the intended structure?
3. **Stylistic Interpretation**: How well was the style/genre implemented?
4. **Dynamic Range**: Were the indicated dynamic changes implemented?
5. **Vocal Quality**: How natural and appropriate were the vocals?
6. **Production Quality**: Overall audio quality and professional sound
7. **Parameter Response**: How well did the service respond to technical adjustments?

Record scores for each metric on a 1-10 scale to create a standardized comparison across services.