This document provides a wealth of additional information that we can incorporate into our cheatsheet! Let me update the Suno AI Ultimate Parameter & Meta-Tag Cheatsheet with these new details:

# Suno AI Ultimate Parameter & Meta-Tag Cheatsheet (2025 Comprehensive Edition)

## 1. Technical Parameters (in `<details>` tags)

These parameters go at the top of your prompt inside `<details>` tags to control technical aspects of the generation.

| Parameter | Status | Description | Example | Notes |
|-----------|--------|-------------|---------|-------|
| `temp=` | Official (API) | Controls randomness/creativity (0.0-1.0+) | `temp=0.85` | Higher = more creative, Lower = more consistent |
| `cfg=` | Official (API) | Controls prompt adherence (1-20) | `cfg=7.0` | Higher = stricter adherence to prompt |
| `key=` | Official (API) | Sets musical key | `key=Cminor` | Also works as "C minor" in style text |
| `time_signature=` | Official (API) | Sets rhythmic structure | `time_signature=3/4` | Also works as "waltz time" in style text |
| `bpm=` | Official (API) | Sets tempo in beats per minute | `bpm=110` | Also works as "110 BPM" in style text |
| `stereo_width=` | Experimental | Controls stereo field width | `stereo_width=120` | Values above 100 = wider than normal |
| `reverb=` | Experimental | Sets reverb amount | `reverb=medium` | Try "low", "medium", "high" |
| `delay_time=` | Experimental | Sets echo timing | `delay_time=350ms` | Values in milliseconds |
| `delay_feedback=` | Experimental | Sets echo repetition | `delay_feedback=40` | Percentage value (0-100) |
| `dynamic_range=` | Experimental | Controls volume variation | `dynamic_range=high` | Try "low", "medium", "high" |
| `master_volume=` | Experimental | Sets overall output level | `master_volume=0` | Typically -6 to 0 |
| `rubato=` | Experimental | Controls timing flexibility | `rubato=moderate` | Try "subtle", "moderate", "expressive" |

## 2. Style & Exclude Directives

These parameters control the overall style and unwanted elements.

| Parameter | Status | Description | Example | Notes |
|-----------|--------|-------------|---------|-------|
| `Style:` | Official | Defines genre, mood, instrumentation | `Style: Cinematic orchestral with ethereal female vocals` | 120-200 character max in API, crucial for setting direction |
| `Exclude:` | Official | Specifies elements to avoid | `Exclude: Male vocals, EDM drops, trap beats` | Works as negative prompt |

*Note: In addition to broad style descriptions, you can include specific genre references like "Cantopop", "K-pop", or media references like "Interstellar Soundtrack" or "Hans Zimmer style" for more targeted results. Language is automatically detected from lyrics, but you can specify accents like "British accent" or "Southern drawl" in the style description.*

## 3. Song Structure Tags

These define the sections of your song.

| Tag | Status | Description | Example Usage | Notes |
|-----|--------|-------------|--------------|-------|
| `[Intro]` | Official | Opening section | `[Intro]` <br> Gentle piano notes | Often instrumental |
| `[Verse]` or `[Verse 1]` | Official | Main lyrical section | `[Verse 1]` <br> First verse lyrics... | Can be numbered for clarity |
| `[Pre-Chorus]` | Official | Transition before chorus | `[Pre-Chorus]` <br> Build-up lyrics... | Creates tension before chorus |
| `[Chorus]` | Official | Main hook/refrain | `[Chorus]` <br> Catchy chorus lyrics... | Usually repeats throughout song |
| `[Bridge]` | Official | Contrasting section | `[Bridge]` <br> Different melody/lyrics... | Often appears once before final chorus |
| `[Interlude]` | Official | Brief instrumental break | `[Interlude]` <br> (atmospheric transition) | No vocals, purely instrumental |
| `[Solo]` | Community | Featured instrument | `[Guitar Solo]` <br> (soaring melody) | Specify instrument type |
| `[Outro]` | Official | Ending section | `[Outro]` <br> Final lyrics fading... | Often paired with Fade Out |
| `[Hook]` | Community | Catchy repeating phrase | `[Hook]` <br> Repeated hook line (x4) | Similar to chorus but more repetitive, popular in rap/pop |
| `[Break]` | Community | Short pause/transition | `[Break]` <br> (drums only) | Brief section change |
| `[End]` | Official | Signals end of song | `[End]` | Always place as final tag |
| `[Silence]` | Community | Creates a pause | `[Silence]` <br> (2 seconds) | Useful for dramatic effect |
| `[Act I]`, `[Scene 1]` | Experimental | Narrative structure | `[Act I: Scene 1]` <br> Opening narrative... | For complex pieces like musicals/operas |

## 4. Vocal & Character Tags

These control the voice types and delivery.

| Tag | Status | Description | Example Usage | Notes |
|-----|--------|-------------|--------------|-------|
| `[Female Vocal]` | Official | Female singer | `[Female Vocal]` <br> Lyrics for woman to sing... | Can also use `[Woman]` or `[female]` |
| `[Male Vocal]` | Official | Male singer | `[Male Vocal]` <br> Lyrics for man to sing... | Can also use `[Man]` or `[male]` |
| `MAN:` or `WOMAN:` | Official | Speaker label format | `MAN: These are my words` | Alternative to bracket format |
| `SOPRANO:` or `TENOR:` | Community | Vocal range hint | `SOPRANO: High melodic line` | For operatic/classical styles |
| `[Duet]` | Community | Two vocalists together | `[Duet]` <br> Lyrics for both to sing... | Often male/female combination |
| `[Choir]` | Community | Multiple-voice harmony | `[Choir]` <br> Lyrics for group to sing... | Creates full, layered vocals |
| `[Harmonies]` | Community | Adds backing vocals | `[Harmonies]` <br> Lyrics with harmony... | Thickens the vocal texture |
| `[Layer Vocals]` | Community | Stacks vocal tracks | `[Layer Vocals]` <br> Lyrics with stacked voices... | Creates a wall of voices |
| `[Spoken Word]` | Official | Non-sung speech | `[Spoken Word]` <br> Words to be spoken... | Used for narration/poetry |
| `[Whisper]` | Community | Quiet, intimate tone | `[Whisper]` <br> Whispered lyrics... | Creates intimate feeling |
| `[Vulnerable]` | Experimental | Emotional, fragile tone | `[Vulnerable]` <br> Emotional lyrics... | For raw, exposed vocal delivery |
| `CAPITALS` | Community | Louder/intense vocals | `SHOUT THIS LINE` | Use for emphasis/intensity |
| `(parentheses)` | Community | Background vocals | `Main lyrics (echo lyrics)` | Creates call-and-response effect |
| `Extended Vo-o-o-wels` | Community | Drawn-out vocal notes | `Lo-o-o-ove` | Creates emotional emphasis |
| `[♪ ... ♪]` | Official | Singing notation | `[♪] Sing this line [♪]` | Useful when mixing speech and singing |
| `—` or `...` | Official | Hesitation markers | `And I... don't know—maybe` | Creates natural pauses in delivery |

## 5. Sound Effects & Atmosphere Tags

These add non-musical sounds to your track.

| Tag | Status | Description | Example Usage | Notes |
|-----|--------|-------------|--------------|-------|
| `*rainfall*` | Community | Rain sounds | `*rainfall*` <br> Gentle intro begins | Use asterisks for ambient sounds |
| `*thunder*` | Community | Thunder clap | Dramatic pause <br> `*thunder*` | Creates dramatic effect |
| `[applause]` | Community | Audience clapping | `[applause]` <br> After dramatic line | Creates live feel |
| `[cheering]` | Community | Crowd cheering | Final chorus <br> `[cheering]` | For triumphant moments |
| `[laughter]` | Official | Laughing sound | Funny line <br> `[laughter]` | For humorous sections |
| `[sighs]` | Official | Sighing sound | Melancholic line <br> `[sighs]` | Conveys emotion |
| `[gasps]` | Official | Gasp sound | Shocking reveal <br> `[gasps]` | Shows surprise |
| `[clears throat]` | Official | Throat clearing | Before important line <br> `[clears throat]` | Adds human element |
| `[birds chirping]` | Community | Bird sounds | Dawn scene <br> `[birds chirping]` | Creates outdoor atmosphere |
| `[phone ringing]` | Community | Phone ring sound | `[phone ringing]` <br> Hello? | For narrative effect |
| `[record scratch]` | Experimental | DJ scratch sound | `[record scratch]` <br> Wait a minute! | For sudden stops/transitions |
| `[beeping]` | Community | Electronic beep | `[beeping]` <br> System activated | For technological/sci-fi feel |
| `[barking]` | Community | Dog bark | Distant sound <br> `[barking]` | Animal sounds |
| `[whistling]` | Community | Whistle sound | `[whistling]` <br> Casual tune | Human sound effect |

## 6. Dynamic & Production Tags

These control the energy flow and production style.

| Tag | Status | Description | Example Usage | Notes |
|-----|--------|-------------|--------------|-------|
| `[Build]` | Community | Gradual energy increase | `[Build]` <br> Tension-building lyrics... | For pre-chorus/transitions |
| `[Build Intensity]` | Community | Stronger energy ramp | `[Build Intensity]` <br> Rising action... | More dramatic than simple Build |
| `[Intensify]` | Community | Sudden energy spike | `[Intensify]` <br> Powerful lyrics... | For immediate impact |
| `[Drop]` | Community | High-energy impact point | `[Drop]` <br> Main hook phrase... | Popular in EDM/electronic |
| `[Crescendo]` | Community | Volume increase | `[Crescendo]` <br> Growing louder... | Gradual volume swell |
| `[Decrescendo]` | Community | Volume decrease | `[Decrescendo]` <br> Fading away... | Gradual volume reduction |
| `[Fade Out]` | Official | End with volume fade | `[Fade Out]` <br> Final repeating lyrics... | Used in outro section |
| `[Fade In]` | Experimental | Begin with volume fade-in | `[Fade In]` <br> Gentle opening... | For soft beginnings |
| `[Produced by ...]` | Community | Production style hint | `[Produced by Hans Zimmer]` | Place at top of prompt |
| `[Recorded at ...]` | Community | Studio atmosphere hint | `[Recorded at Abbey Road]` | Place at top of prompt |
| `[Mixed with ...]` | Community | Mixing style hint | `[Mixed with vintage equipment]` | Place at top of prompt |
| `[Instrumental]` | Official | No vocals/singing | `[Instrumental]` <br> (piano and strings) | For purely instrumental sections |
| `[Orchestral]` | Community | Full orchestra sound | `[Orchestral]` <br> (sweeping strings) | For cinematic sections |
| `[Big Finish]` | Community | Climactic ending | `[Big Finish]` <br> Final powerful line | Creates an impactful conclusion |
| `[Acapella]` | Community | Vocals only | `[Acapella]` <br> Pure vocal performance | Minimal/no instrumentation |

## 7. Tempo & Music Theory Tags

These control timing and musical expression.

| Tag | Status | Description | Example Usage | Notes |
|-----|--------|-------------|--------------|-------|
| `[Rubato]` | Experimental | Flexible timing | `[Rubato]` <br> Expressive lyrics... | Adds human-like timing variations |
| `[Accelerando]` | Experimental | Gradually speed up | `[Accelerando]` <br> Quickening lyrics... | Builds excitement |
| `[Ritardando]` | Experimental | Gradually slow down | `[Ritardando]` <br> Slowing lyrics... | Creates conclusion feel |
| `[Rallentando]` | Experimental | Broader slowing | `[Rallentando]` <br> Final words... | More dramatic than Ritardando |
| `[Tempo primo]` | Experimental | Return to original speed | `[Tempo primo]` <br> Back to theme... | After tempo changes |
| `[Con moto]` | Experimental | With movement/motion | `[Con moto]` <br> Flowing lyrics... | Adds forward momentum |
| `[Cantabile]` | Experimental | In singing style | `[Cantabile]` <br> Lyrical melody... | For singing-like instrumental |
| `[Scherzando]` | Experimental | Playful, light | `[Scherzando]` <br> Lighthearted lyrics... | For whimsical sections |
| `[Dynamic Complex Progression]` | Experimental | Evolving chord changes | `[Dynamic Complex Progression]` | Creates sophisticated harmony |
| `[Epic Complex Progression]` | Experimental | Grand chord movement | `[Epic Complex Progression]` | For cinematic climaxes |
| `[Key: C minor]` | Experimental | Specifies key signature | `[Key: F major]` <br> Bright melody... | Attempts to set harmonic center |

## 8. Instrument & Section-Specific Tags

These highlight specific instruments or create special sections.

| Tag | Status | Description | Example Usage | Notes |
|-----|--------|-------------|--------------|-------|
| `[Guitar Solo]` | Community | Featured guitar | `[Guitar Solo]` <br> (soaring melody) | No vocals during this section |
| `[Piano Solo]` | Community | Featured piano | `[Piano Solo]` <br> (emotional melody) | Focuses on piano playing |
| `[Cello Solo]` | Community | Featured cello | `[Cello Solo]` <br> (deep, resonant) | For emotional string moments |
| `[Drum Solo]` | Community | Featured drums | `[Drum Solo]` <br> (complex rhythm) | Percussion-focused section |
| `[Saxophone Solo]` | Community | Featured sax | `[Saxophone Solo]` <br> (jazzy riff) | Creates jazz/blues feel |
| `[Synth Arpeggio]` | Experimental | Repeated synth pattern | `[Synth Arpeggio]` <br> (rising pattern) | Creates electronic texture |
| `[Bass Drop]` | Community | Heavy bass impact | `[Bass Drop]` <br> (deep sub bass) | Popular in EDM/dubstep |
| `[Acapella]` | Community | Vocals only | `[Acapella]` <br> Lyrics without music... | Minimal/no instrumentation |
| `[Percussion Break]` | Community | Rhythm-focused section | `[Percussion Break]` <br> (tribal drums) | Focuses on rhythm elements |
| `[String Section]` | Community | Featured strings | `[String Section]` <br> (emotional melody) | Violin/viola/cello focus |
| `[Latin Percussion]` | Community | Latin rhythm elements | `[Latin Percussion]` <br> (salsa rhythm) | May have variable reliability |

## 9. Meta-Object Notation (Advanced)

For structured control in newer Suno versions (V4+), you can use JSON-like meta-objects:

```
[meta_object: arrangement]
[{
  "tempo": 135,
  "key": "D minor",
  "time_signature": "4/4",
  "structure": ["Intro", "Verse 1", "Pre-Chorus", "Chorus", "Verse 2", "Pre-Chorus", "Chorus", "Bridge", "Chorus", "Outro"],
  "instrumentation": {
    "drums": ["reggae rhythm", "808 bass"],
    "bass": ["deep sub-bass", "hypnotic bassline"],
    "melodic": ["synth pads", "electric guitar"],
    "effects": ["reverb", "delay", "vocal chops"],
    "vocals": ["female vocals", "harmonizer for chorus"]
  }
}]
```

*Note: When using the Suno API directly, be aware of character limits: style prompts are limited to 120 characters, and lyrics prompts can be up to 3000 characters. Structure your API requests accordingly for optimal results.*

## 10. Detailed Metadata Structure (Experimental)

Some advanced users place a structured metadata block at the top of their prompts to give comprehensive instructions:

```
[GENRES: Ambient, Downtempo]
[SOUNDS LIKE: Bonobo, Tycho]
[STYLE: Atmospheric, Dreamy]
[MOOD: Reflective, Melancholic]
[VOCALS: Female, Ethereal, Whispered]
[ARRANGEMENT: Organic percussion, Electronic bass, Floating pads]
[INSTRUMENTATION: Piano, Synthesizers, Acoustic drums, Field recordings]
[TEMPO: Slow, 70 BPM]
[PRODUCTION: Lo-fi textures, Vinyl crackle, Wide stereo field]
[STRUCTURE: Ambient intro, 2 verses, Chorus, Bridge, Outro]
[DYNAMICS: Subtle build throughout, Climax at bridge]
[EMOTIONS: Nostalgia, Longing, Acceptance]
```

This approach front-loads all song details in labeled categories. While not officially documented, users report this format helps guide the AI toward highly specific results, especially in earlier versions like v3.5.

## 11. Experimental Genre & Reference Tags

Users have discovered that Suno responds to specific genre and reference tags beyond basic style descriptions. These are community-discovered and experimental but can create more targeted results:

| Tag Type | Examples | Usage |
|----------|----------|-------|
| Genre-Specific | [Cantopop], [K-pop], [Experimental Synth], [Hyperpop] | Place before lyrics to guide genre style |
| Media References | [Interstellar Soundtrack], [Stranger Things Theme], [Cyberpunk] | Creates sounds inspired by specific media |
| Artist References | [In the style of Billie Eilish], [Like Trent Reznor] | Mimics artist's production style |
| Uncommon Instruments | [Washboard], [Theremin], [Glass Harmonica] | Experiments with unusual instruments |

*Note: These tags have variable reliability and may not always produce the exact sound referenced. Results may vary across different Suno versions.*

## Basic Example

```
<details>
temp=0.8
cfg=7.0
key=Aminor
time_signature=4/4
bpm=100
</details>

Style: Indie folk with acoustic guitar, warm vocals, and subtle piano accents
Exclude: Heavy drums, distorted guitars, electronic elements

[Intro]
(gentle acoustic guitar melody)

[Verse 1]
[Female Vocal]
Morning light through autumn leaves
Memories of days gone by
Whispers of a changing season
In the cool September sky

[Chorus]
Time keeps flowing like a river
Carrying us along
Through the valleys and the mountains
Where we all belong

[Verse 2]
[Female Vocal]
Footprints fade on sandy shores
As waves wash them away
Nothing truly lasts forever
But love finds a way to stay

[Chorus]
Time keeps flowing like a river
Carrying us along
Through the valleys and the mountains
Where we all belong

[Outro]
(gentle acoustic guitar fading)
[End]
```

## Complete Advanced Example

```
<details>
temp=0.85
cfg=7.0
key=Aminor
time_signature=3/4
bpm=90
stereo_width=120
reverb=medium
delay_time=350ms
delay_feedback=20
dynamic_range=high
master_volume=0
rubato=moderate
</details>

[Produced by Hans Zimmer and Massive Attack]
[Recorded at Air Studios London with vintage equipment]
[Mixed in Dolby Atmos with wide stereo imaging]

[GENRES: Cinematic, Orchestral, Dark Ambient]
[VOCALS: Female, Ethereal, Emotional]
[MOOD: Haunting, Melancholic, Introspective]
[TEMPO: Moderate waltz, 90 BPM]

Style: Cinematic orchestral with ethereal female vocals, dark atmospheric elements, haunting melodies, emotional crescendos, chamber strings, and minimal percussion
Exclude: Male vocals, EDM drops, trap beats, distorted guitars, heavy drums

[Intro]
[Fade In]
*rainfall*
[Orchestral]
Haunting piano notes echo in darkness
Strings slowly emerge from silence
[Dynamic Complex Progression]

[Verse 1]
[Female Vocal]
[Vulnerable]
Memories fade into shadows
Time stands still in this empty room
Whispers of what once was
Echo through the halls of my mind

[Pre-Chorus]
[Build]
The light begins to fade
As darkness claims the day
[Harmonies] (distant voices join)

[Chorus]
[Intensify]
LOST IN THE ECHOES OF TIME
Searching for what we left behind
LOST IN THE ECHOES OF TIME
(Will we ever find our way?)

[Interlude]
[String Section]
(emotional counterpoint melody)
[Build Intensity]

[Verse 2]
WOMAN: Faces blur like watercolor
Names forgotten like morning dreams
Trying to hold onto moments
Slipping through my fingers like sand

[Pre-Chorus]
[Build]
The light begins to fade
As darkness claims the day
[Layer Vocals] (voices overlap and build)

[Chorus]
[Intensify]
LOST IN THE ECHOES OF TIME
Searching for what we left behind
LOST IN THE ECHOES OF TIME
(Will we ever find our way?)

[Bridge]
[Spoken Word]
[Rubato]
We construct elaborate memories
Only to watch them dissolve like morning mist
[Accelerando]
Faster and faster they slip away
Until nothing remains but feeling

[Solo]
[Cello Solo]
[Emotional]
[Build Intensity]

[Silence]
(2 seconds)

[Chorus]
[Layer Vocals]
LOST IN THE ECHOES OF TI-I-I-IME
Searching for what we left behind
LOST IN THE ECHOES OF TIME
(Will we ever find our way?)

[Outro]
[Female Vocal]
[Whisper]
Time moves on...
Whether we're ready or not
*distant thunder*
[Decrescendo]
[Fade Out]
[End]
```

## Notes on Usage

1. **Version Compatibility**: Suno AI has evolved from V3.5 (requiring structured prompts) to V4+ (supporting natural language). Newer versions handle meta-tags more intuitively within conversational prompts.

2. **Tag Reliability**: Official tags are most reliable, community tags are generally effective but may have occasional issues, and experimental tags have variable results.

3. **Conflicting Tags**: Avoid contradictory instructions as they may confuse the AI. For example, don't use both [Accelerando] and [Ritardando] in the same section.

4. **Prompt Length**: While Suno can handle detailed prompts, focus on clarity. For Style directives, stay within 120-200 characters for optimal processing.

5. **Creativity Balance**: Use `temp=` to control randomness—higher values (0.85-1.0) for creative exploration, lower values (0.5-0.7) for more predictable results.

6. **Parameter Testing**: Experimental parameters may work differently across Suno versions. If an experimental tag doesn't produce the expected result, try incorporating its concept into the Style directive instead.

7. **Custom Mode**: For maximum control, use Suno's Custom Mode rather than simple text-to-song generation.

8. **Character Limits**: When using the Suno API directly, style prompts are limited to 120 characters and lyrics prompts to 3000 characters. In the web interface, these limits may be more flexible but keeping your style descriptions concise (under 200 characters) typically yields better results.

9. **Genre Specificity**: Don't hesitate to reference specific artists, soundtracks, or niche genres in your style description or as tags. For example, "Style: Ethereal ambient like Brian Eno with Blade Runner soundtrack influences" can yield more targeted results than generic style descriptions.

10. **Token Order and Capitalization**: Keep tags capitalized inside brackets [Like This] and consider ordering your style tags from general to specific (era → genre → subgenre → mood → instruments) for more predictable results.

This comprehensive cheatsheet organizes all known Suno AI parameters and meta-tags into logical categories with clear examples of usage. It distinguishes between official, community-tested, and experimental tags, helping you make informed choices when crafting prompts that leverage Suno AI's full potential.