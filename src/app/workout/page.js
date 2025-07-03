// pages/workout.js
"use client"; 

import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

import GLOBALS from "@/server/Globals";
import Loader from "@/components/Loader";

const createMarkup = (htmlString) => ({ __html: htmlString });

export default function Workout() {
  const [loading, setLoading] = useState(false);
  const [pagedata, setPagedata] = useState("");

  useEffect(() => {
    setLoading(true);
    async function getData() {
      try {
        const res = await fetch(
          `${GLOBALS.API_BASE_URL}/cmspage?page_id=contact-us`
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setPagedata(json.data.content);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Head>
        <title>Boxing Workout | MVP Boxing</title>
      </Head>

      <div
        className="mvpBgContainer mvp_container"
        id="newsMainContent"
        style={{ width: "100%" }}
      >
        {loading && <Loader loading={loading} />}

        <div className="news_articles_content" style={{ width: "100%" }}>
          <div className="left_content_area" style={{ margin: 0 }}>
            <h1 className="titles_article border_titles_article1">
              Boxing workout{" "}
              <div className="socialInfo">
                <div className="left">
                  mvpboxing&nbsp;|&nbsp;
                  <i className="fa fa-clock-o" aria-hidden="true" />
                  &nbsp;August 23, 2019, 06:18PM{" "}
                </div>
                <div className="clear" />
              </div>
              {/* ends (.socialInfo) */}
            </h1>
            <div
              className="workout_content update-workout_content headline-articles"
              style={{ minHeight: 667 }}
            >
              <div style={{ margin: "25px 0 25px 0" }}>
                <img
                  src="/assets/img/2d1377d7030b3821b2f7d2d8a70118dd.png"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div id="accordion" className="accordion">
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse0"
                    aria-expanded="true"
                    aria-controls="collapse0"
                  >
                    <div className="card-header" id="heading0">
                      <h5 className="mb-0 question">
                        <strong>Description of Boxing</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-down"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse0"
                    className="collapse show"
                    aria-labelledby="heading0"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Boxing (pugilism) is a combative sport in which two
                        combatants, generally of similar weight fight each other
                        with their fists. Boxing is supervised by a referee and
                        is typically engaged in during a series of three-minute
                        intervals called rounds with a one minute rest period
                        (recovery) in between each round.
                      </p>
                      <p>
                        There are various ways victory is achieved in a boxing
                        match: When an opponent is knocked down and unable to
                        rise to his feet before the referee counts to ten
                        seconds or is unconscious (a Knockout or KO) or if the
                        opponent is deemed too injured to continue (a Technical
                        Knockout, or TKO). Because boxing is subjective in
                        nature and is scored on a point system, then if a bout
                        goes the entire distance, a winner is then determined by
                        3 independent judges' scorecards. Presently in the
                        United States, there is no federal commission to
                        regulate or oversee professional prize fighting, this
                        has caused a lack of uniformity that currently exists
                        among all boxing commissions regarding the rules,
                        regulations and medical requirements. Generally bouts
                        take place in a "ring" that is 18 to 24 square feet in
                        length and is enclosed on each side by four strands of
                        rope.
                      </p>
                      <p>
                        The ancient Greeks provide us our first historical
                        records of boxing as a sport; they codified a set of
                        rules and staged tournaments with professionals. Boxing
                        became an official sport of the Olympic game as early as
                        688 B.C., 23rd Olympiad. The modern era of boxing
                        evolved in Great Britain, in 1866 the 9th Marques of
                        Queensberry gave his support to a new set of rules,
                        which were named in his honor. The Marques of
                        Queensberry rule is a code of generally accepted rules
                        in the sport of boxing. They are intended for use in
                        both professional and amateur boxing matches. These
                        rules limit the number of 3- minute rounds, eliminated
                        wrestling tactics, and made the use of boxing gloves
                        mandatory.
                      </p>
                      <p>
                        Because of the intense activity of boxing, it is very
                        important for the fighters to be highly conditioned,
                        both physically and mentally. A fighter entering the
                        ring in anything but a high level of physical
                        conditioning can expect, at the very least, to be
                        knocked unconscious and increases the risk of serious
                        injury, or death if ill prepared.
                      </p>
                      <p>
                        Listed are the various boxing rules: Boxers are
                        prohibited from hitting below the belt (groin area),
                        holding, tripping, pushing, biting, spitting, or
                        wrestling. They are not allowed to kick, head-butt, or
                        hitting with any part of the arm other than the knuckles
                        of a closed fist (including hitting with the elbow,
                        shoulder or forearm, as well as with open gloves, the
                        wrist, the inside, back or side of the hand). They are
                        prohibited as well from hitting the back, back of the
                        neck or head (rabbit-punch) or the kidneys and are
                        prevented from holding the ropes for support when
                        punching, and holding an opponent while punching. A
                        "clinch" -- a defensive tactic in which a boxer wraps
                        his/her opponents arms with the sole intention being to
                        prevent from being hit - once the referee separates the
                        fighters, each fighter must take a full step back before
                        fighting is resumed ( referee has the power to direct
                        the fighters to "punch out" of the clinch). When a boxer
                        is knocked down by a punch, his/her opponent must
                        immediately cease fighting and go to the nearest neutral
                        corner of the ring until the referee has either ruled a
                        knockout or requested for the fight to continue.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="true"
                    aria-controls="collapse1"
                  >
                    <div className="card-header" id="heading1">
                      <h5 className="mb-0 question">
                        <strong>Physical Training</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse1"
                    className="collapse"
                    aria-labelledby="heading1"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Proper structure to the training session is an important
                        pre-requisite to obtaining desirable results. When
                        designing a workout, it is necessary to identify which
                        energy systems are used in the activity. Based on the
                        systems used, training time can be devoted to
                        improvement of that system. It is also important to
                        identify the initial fitness level of the participant,
                        the intensity of the activity, frequency, duration, and
                        the method of training to be used.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse2"
                    aria-expanded="true"
                    aria-controls="collapse2"
                  >
                    <div className="card-header" id="heading2">
                      <h5 className="mb-0 question">
                        <strong>Energy Systems</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse2"
                    className="collapse"
                    aria-labelledby="heading2"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Based on duration and intensity of the activity, four
                        predominant energy pathways have been identified in
                        boxing and any sport. The systems identified are the
                        ATP, ATP-CP, Lactic Acid and the Aerobic-oxidative
                        system. A basic understanding of these systems is
                        helpful in understanding the design of the workouts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse3"
                    aria-expanded="true"
                    aria-controls="collapse3"
                  >
                    <div className="card-header" id="heading3">
                      <h5 className="mb-0 question">
                        <strong>ATP System</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse3"
                    className="collapse"
                    aria-labelledby="heading3"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        ATP (adenosine tri phosphate) is the immediate source of
                        energy for muscular contraction. There are two pathways
                        through which it is formed: the aerobic pathway and the
                        anaerobic pathway. The aerobic pathway requires oxygen
                        to be present and utilizes fat, protein and
                        carbohydrates (glucose, glycogen) to resynthesize ATP.
                        When movement is very quick and explosive, there is not
                        enough time for oxygen to be delivered to the
                        contracting muscles. This is where the anaerobic pathway
                        is called into action. The anaerobic pathway does not
                        require oxygen and uses only carbohydrates to produce
                        ATP. There is enough ATP stored in muscle to last for
                        only three seconds of contraction.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse4"
                    aria-expanded="true"
                    aria-controls="collapse4"
                  >
                    <div className="card-header" id="heading4">
                      <h5 className="mb-0 question">
                        <strong>ATP-CP System</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse4"
                    className="collapse"
                    aria-labelledby="heading4"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        When ATP is broken down and the energy is released, ADP
                        (adenosine diphosphate) and P (phosphate) are formed.
                        Another important source of energy is CP (creatine
                        phosphate). CP cannot be used directly by the muscle, so
                        it interacts with ADP and CP to re-form ATP. There is
                        not a lot of CP available to the muscle so it too must
                        be continually resynthesized. The ATP-CP system can
                        supply enough energy to last for eight seconds of
                        intense exercise.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse5"
                    aria-expanded="true"
                    aria-controls="collapse5"
                  >
                    <div className="card-header" id="heading5">
                      <h5 className="mb-0 question">
                        <strong>Lactic Acid System</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse5"
                    className="collapse"
                    aria-labelledby="heading5"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        When intense activity is continued for about ninety
                        seconds, glycogen is used as an energy source. When the
                        glycogen is broken down, more ATP is produced. However,
                        if the activity is intense (anaerobic),there will not be
                        enough oxygen supplied to the muscles. When glycogen is
                        burned in the absence of oxygen, lactic acid is
                        produced. Once lactic acid is formed, it diffuses into
                        the blood and is transported to different areas of the
                        body. This allows the working muscle to continue.
                        Eventually, the lactic acid level will accumulate to a
                        level that will slow down the biochemical reactions that
                        lead to the production of ATP. Accumulation of lactic
                        acid causes pain and burning sensations in the stressed
                        muscles. Shortly thereafter, contraction will not be
                        able to take place.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse6"
                    aria-expanded="true"
                    aria-controls="collapse6"
                  >
                    <div className="card-header" id="heading6">
                      <h5 className="mb-0 question">
                        <strong>Aerobic-Oxidative System</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse6"
                    className="collapse"
                    aria-labelledby="heading6"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        If this intense activity is to continue, the body will
                        shift into the aerobic-oxidative system. The body will
                        need an increased oxygen supply. This extra oxygen will
                        be available only if the intensity of the activity is
                        decreased. This higher oxygen consumption converts the
                        lactic acid to pyruvate, which converts to carbon
                        dioxide and water and is dispelled from the lungs.
                        Pyruvate is a product of burned glycogen. If pyruvate is
                        formed in the absence of oxygen, lactic acid formation
                        will be the result. The system will then shift back into
                        the anaerobic systems.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse7"
                    aria-expanded="true"
                    aria-controls="collapse7"
                  >
                    <div className="card-header" id="heading7">
                      <h5 className="mb-0 question">
                        <strong>
                          Recovery of the Anaerobic Systems (Rest)
                        </strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse7"
                    className="collapse"
                    aria-labelledby="heading7"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        During the recovery period of training, the ATP-CP must
                        be built-up and replenished and the accumulated lactic
                        acid must be removed. If these needs aren't met, the
                        systems will be un-available for further activity. While
                        resting after an anaerobic work bout, oxygen consumption
                        is increased because of the increased depth and rate of
                        breathing. This extra oxygen turns the lactic acid back
                        to pyruvic acid and within 20 seconds, 50% of the ATP
                        and CP is restored, in 40 seconds, 75% is restored and
                        in 60 seconds, 87% is restored. Almost all of the ATP
                        and CP are replenished within three minutes. The removal
                        rate of lactic acid is slower then the rebuilding rate
                        of ATP and CP. In 25 minutes, 50% of the lactic acid
                        will be removed, in 50 minutes, 75% and 87% in 75
                        minutes. The removal rate of lactic acid can be sped up
                        through light activity performed during the recovery
                        period. This is because some of the lactic acid is
                        metabolized aerobically during the light activity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse8"
                    aria-expanded="true"
                    aria-controls="collapse8"
                  >
                    <div className="card-header" id="heading8">
                      <h5 className="mb-0 question">
                        <strong>Work/Rest Ratio</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse8"
                    className="collapse"
                    aria-labelledby="heading8"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        The rest interval is very important. The work rest ratio
                        in Appendix A has been designed according to
                        physiological guidelines. If the rest period is too
                        brief, the ATP and CP will not be sufficiently
                        replenished and the accumulated lactic acid will not be
                        adequately removed. The next bout of exercise would have
                        to be performed at a lower intensity. If the rest period
                        is too long, the body will recover and the training
                        effect will be lost.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse9"
                    aria-expanded="true"
                    aria-controls="collapse9"
                  >
                    <div className="card-header" id="heading9">
                      <h5 className="mb-0 question">
                        <strong>Pre-Program Information</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse9"
                    className="collapse"
                    aria-labelledby="heading9"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        To obtain desired results, it is important to train at
                        the proper intensity (degree of overload). The intensity
                        of an activity is dependent upon many factors, mainly
                        the goals of the participant. If the goal is
                        health-related fitness, the intensity does not need to
                        be as high as an athletes intensity who set a goal of
                        increased performance. Both individuals need to monitor
                        their workload through heart rate (HR) to determine and
                        work at the optimal intensity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse10"
                    aria-expanded="true"
                    aria-controls="collapse10"
                  >
                    <div className="card-header" id="heading10">
                      <h5 className="mb-0 question">
                        <strong>Determination of Resting Heart Rate</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse10"
                    className="collapse"
                    aria-labelledby="heading10"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        The first step is to determine the resting heart rate
                        (RHR). The best results are obtained early in the
                        morning immediately upon awakening. A reliable RHR is
                        obtained by averaging the results of three mornings in a
                        row. The HR may be taken by placing fingers on the
                        carotid artery on the side of the neck, the temporal
                        artery in front of the ear (temple) or at the radial
                        artery at the base of the thumb. A good estimation of
                        the HR is to count the pulse for 10 or 15 seconds and
                        multiply by 6 or 4, respectively. This will give the HR
                        in beats per minute (bpm). If the pulse was counted 18
                        times in 15 seconds, the RHR is 72 bpm (18x4=72 bpm).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse11"
                    aria-expanded="true"
                    aria-controls="collapse11"
                  >
                    <div className="card-header" id="heading11">
                      <h5 className="mb-0 question">
                        <strong>Determination of Maximum Heart Rate</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse11"
                    className="collapse"
                    aria-labelledby="heading11"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        The maximum heart rate (MHR) is needed to calculate the
                        HR at which the workload should be performed. The direct
                        method of determining MHR is to monitor the HR of a
                        subject running to exhaustion on a treadmill. An easier
                        way is to subtract age from 220. A 20 year old athlete
                        will have a MHR of 200 bpm (220- 20=200).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse12"
                    aria-expanded="true"
                    aria-controls="collapse12"
                  >
                    <div className="card-header" id="heading12">
                      <h5 className="mb-0 question">
                        <strong>Determination of Training Heart Rate</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse12"
                    className="collapse"
                    aria-labelledby="heading12"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        The training heart rate (THR) is the HR at which the
                        workload should be performed to obtain a desired
                        physiological response. The desired percentage of MHR is
                        multiplied by MHR to determine the THR. If the same 20
                        year old athlete is to perform a workout that calls for
                        an intensity at 70% of MHR, the THR would be 140 bpm
                        (200x.70=140 bpm).
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse13"
                    aria-expanded="true"
                    aria-controls="collapse13"
                  >
                    <div className="card-header" id="heading13">
                      <h5 className="mb-0 question">
                        <strong>Training Intensity and Frequency</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse13"
                    className="collapse"
                    aria-labelledby="heading13"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        For a training effect to occur, the appropriate overload
                        must be placed on the targeted system. The aerobic
                        system needs to be trained at 60-90% of MHR for a
                        training effect to occur. Healthy, sedentary individuals
                        should start at the lower end (60%) and gradually build
                        up over time. Trained aerobic athletes should train near
                        the upper end (90%). The anaerobic systems need to be
                        trained at 90-100% of MHR. How often should the systems
                        be overloaded? Research shows that 3 days per week is
                        the minimum for aerobic training. Moderately trained
                        individuals should train 3-5 days per week while highly
                        trained athletes can train 5-7 days per week. The
                        anaerobic systems need a minimum of 3 days per week and
                        can be trained on the same days as the aerobic system.
                        It is recommended that the anaerobic work precedes the
                        aerobic training. Other days can be spent developing
                        skill and techniques.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse14"
                    aria-expanded="true"
                    aria-controls="collapse14"
                  >
                    <div className="card-header" id="heading14">
                      <h5 className="mb-0 question">
                        <strong>Warm-Up Equipment Needed</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse14"
                    className="collapse"
                    aria-labelledby="heading14"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Thai-pads and a stop watch (Modern sport watches with a
                        repeat timer work very well). Warming-up is important to
                        physically and psychologically prepare the participant
                        for the increased demands about to be placed on the
                        body. There are two types of warm-up: General and
                        Specific. General warm-up consists of calisthenics,
                        stretching and non-sport specific activity. Specific
                        warm-up is performing the actual activity itself in a
                        light, easy manner. The warm-up listed in Appendix B is
                        a Specific warm-up. It begins with a 4 minute round of
                        round kicks on the Thai-pads. The 4 minute rest interval
                        should be spent stretching or holding the pads for the
                        previous holder. Workouts are ideally started and
                        finished by one individual before holding for the
                        partner. At completion of the 4 minute rest period, a 2
                        minute round of Form is done. Kicks, knees and elbows
                        are thrown light and easy. The emphasis is on proper
                        form. The two minute rest prepares the body for
                        Accelerations. Accelerations help prepare the body for
                        high intensity work. Each round lasts 16 seconds. The
                        first 8 seconds is done at an easy pace and the last 8
                        seconds is done at full speed. Two consecutive kicks are
                        thrown with the same leg before switching. The rest
                        period is 24 seconds between each of the 4 rounds. A one
                        minute rest is given prior to the Gutbuster rounds.
                        Gutbusters consist of 4 rounds lasting 10 seconds each.
                        one kick per side is thrown at full intensity (no
                        holding back). Gutbusters train the ATP-CP system. There
                        is a 3 minute rest at completion of the Gutbuster
                        rounds. Next is the workout!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse15"
                    aria-expanded="true"
                    aria-controls="collapse15"
                  >
                    <div className="card-header" id="heading15">
                      <h5 className="mb-0 question">
                        <strong>Focus-Pad Training</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse15"
                    className="collapse"
                    aria-labelledby="heading15"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        In one, three minute Thai-boxing round, a fighter will
                        receive approximately 30% of his energy from the ATP-CP
                        system, 5% from the aerobic system and 65% from the
                        lactic acid system. The amount of training in each
                        system should closely reflect these percentages.
                        Appendix A contains the Focus-pad workouts. The chart is
                        used in the following manner:
                      </p>
                      <ul className="pl-1">
                        <li>
                          <i
                            className="fa fa-check-square-o"
                            aria-hidden="true"
                          />
                          &nbsp;Determine what system needs to be trained and
                          locate it in the Systems column.
                        </li>
                        <li>
                          <i
                            className="fa fa-check-square-o"
                            aria-hidden="true"
                          />
                          &nbsp;Read across the row and make a note of how long
                          each round is and the amount of rest between rounds.
                        </li>
                        <li>
                          <i
                            className="fa fa-check-square-o"
                            aria-hidden="true"
                          />
                          &nbsp;Take the value in the % Max HR column and plug
                          it into the THR formula. If the column gives two
                          values, calculate the THR for each.
                        </li>
                      </ul>
                      <p>
                        The results are termed the training-sensitive zone. This
                        zone will give optimal physiological results for the
                        system picked. Following the same principles (system,
                        work rest ratio, % max HR, etc.) many other training
                        methods can be devised. Other methods of training can be
                        used with the chart as well. Some other methods of
                        training that are also important to boxing include
                        running (especially sprints), heavybag,
                        speedbag,double-end bag, sparring, jump- rope,
                        shadow-boxing, plyometrics, tubing, swiss ball, kettle
                        bell, medicine ball training, and focus mitts.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse16"
                    aria-expanded="true"
                    aria-controls="collapse16"
                  >
                    <div className="card-header" id="heading16">
                      <h5 className="mb-0 question">
                        <strong>Cool-Down</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse16"
                    className="collapse"
                    aria-labelledby="heading16"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        The cool-down is post-activity exercise done in a
                        continuous, easy, relaxing manner. The cool-down helps
                        the body return to a normal resting state. It also
                        decreases DOMS (Delayed Onset of Muscle Soreness), helps
                        to alleviate the pooling of blood in the lower
                        extremities and increases the removal rate of
                        accumulated lactic acid.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse17"
                    aria-expanded="true"
                    aria-controls="collapse17"
                  >
                    <div className="card-header" id="heading17">
                      <h5 className="mb-0 question">
                        <strong>Weight Training</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse17"
                    className="collapse"
                    aria-labelledby="heading17"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Strength and muscle endurance are important components
                        in boxing. Strength is the amount of force that can be
                        exerted by a muscle group for one movement. Muscle
                        endurance is the ability of a muscle to contract over a
                        period of time. The advantages of these two traits is
                        obvious when applied to boxing. Many trainers of Western
                        boxing feel that weight training will make the athlete
                        muscle bound and slow them down. All research
                        conclusively demonstrates that a properly designed and
                        implemented boxing specific program will increase speed
                        and power. Take a look at the World Record holder in the
                        100 meters. Leroy Burrell is obviously a fan of weight
                        training. Is Manny Pacquiao slow?
                      </p>
                      <p>
                        Weight training can increase both muscular endurance and
                        strength. There are four basic principles to follow
                        while on a weight- resistance training program:
                      </p>
                      <ul className="pl-1">
                        <li>
                          <i
                            className="fa fa-check-square-o"
                            aria-hidden="true"
                          />
                          &nbsp;Overload-forcing the muscles to contract at near
                          maximum levels. Through overload, the muscle will be
                          forced to adapt.
                        </li>
                        <li>
                          <i
                            className="fa fa-check-square-o"
                            aria-hidden="true"
                          />
                          &nbsp;Progressive resistance-the training load must be
                          progressively increased to cause overload to the
                          muscle.
                        </li>
                        <li>
                          <i
                            className="fa fa-check-square-o"
                            aria-hidden="true"
                          />
                          &nbsp;Specificity-the muscle adaptations are specific
                          to the type of training done. Therefore, the same
                          muscles used in Thai-boxing need to be stressed while
                          weight training.
                        </li>
                        <li>
                          <i
                            className="fa fa-check-square-o"
                            aria-hidden="true"
                          />
                          &nbsp;Recovery-a muscle fatigued from the effects of
                          weight training needs 48 hours recovery before
                          resistance training is repeated.
                        </li>
                      </ul>
                      <br />
                      <p>
                        To determine the proper amount of resistance to train
                        with, a 1 repetition max (RM) is used. One RM is the
                        maximum load that can be moved through the full range of
                        motion for 1 repetition. A percentage of this 1 RM is
                        then taken to determine a training weight. While
                        lifting, the concentric contraction (shortening of the
                        muscle and decrease in angle of a joint) should be
                        performed in 1-2 seconds. The eccentric contraction
                        (lengthening of the muscle and increase in the angle of
                        the joint) should last 4 seconds. For example, while
                        performing a barbell biceps curl, the weight is lifted
                        up in 1-2 seconds and lowered in 4 seconds.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse18"
                    aria-expanded="true"
                    aria-controls="collapse18"
                  >
                    <div className="card-header" id="heading18">
                      <h5 className="mb-0 question">
                        <strong>Periodization</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse18"
                    className="collapse"
                    aria-labelledby="heading18"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Periodization is based on the theory that hard, high
                        intensity work over extended periods of time can lead to
                        burnout, injury and stagnation. Better progress can be
                        made following a periodization schedule. The
                        periodization cycle can be found in Appendix D for
                        weight training and in Appendix E for Focus-pads.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse19"
                    aria-expanded="true"
                    aria-controls="collapse19"
                  >
                    <div className="card-header" id="heading19">
                      <h5 className="mb-0 question">
                        <strong>Conclusion</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse19"
                    className="collapse"
                    aria-labelledby="heading19"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        By following this scientifically based training program,
                        you can be assured of making optimal results. The main
                        objective is to be consistent with it. On days you feel
                        like skipping the workout, remind yourself of your
                        goals. Its better to decrease the intensity and do the
                        workout then to not do it at all. The #l reason for
                        quitting an exercise program was given in a survey: The
                        participants perceived the training as too hard. There
                        is no better way to discourage a new exerciser then to
                        crush their enthusiasm with a killer workout. There is
                        no need to jump into a new program head first. Take your
                        time, set short &amp; long term goals, and you will be
                        on the path to success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse20"
                    aria-expanded="true"
                    aria-controls="collapse20"
                  >
                    <div className="card-header" id="heading20">
                      <h5 className="mb-0 question">
                        <strong>APPENDIX B: WARM-UP</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse20"
                    className="collapse"
                    aria-labelledby="heading20"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>4 minutes, easy kicks.</p>
                      <p>4 minutes, recovery, stretching.</p>
                      <p>
                        2 minutes, easy Form, kicks, knees and elbows. 2
                        minutes, recovery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse20"
                    aria-expanded="true"
                    aria-controls="collapse20"
                  >
                    <div className="card-header" id="heading20">
                      <h5 className="mb-0 question">
                        <strong>ACCELERATIONS</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse20"
                    className="collapse"
                    aria-labelledby="heading20"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        8 seconds easy, 8 seconds full speed, 24 seconds. rest,
                        4 rounds. 1 minute rest
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card mb-1">
                  <a
                    className="text-left header"
                    data-toggle="collapse"
                    data-target="#collapse21"
                    aria-expanded="true"
                    aria-controls="collapse21"
                  >
                    <div className="card-header" id="heading21">
                      <h5 className="mb-0 question">
                        <strong>GUTBUSTERS</strong>
                        <span className="right">
                          <i
                            className="arrow fa fa-arrow-right"
                            aria-hidden="true"
                          />
                        </span>
                      </h5>
                    </div>
                  </a>
                  <div
                    id="collapse21"
                    className="collapse"
                    aria-labelledby="heading21"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        10 seconds full speed, 30 seconds rest, 4 rounds. 3
                        minutes rest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Written and researched by:&nbsp;<strong>Tim Mousel</strong>
              </p>
            </div>
            {/* ends (.workout_content) */}
            <div className="page__links" style={{ marginBottom: 10 }}>
              <h3 className="page__links__title" />
              <Link
                href="/contact-us"
                className="page__links__link btn feat-link"
                target="_self"
              >
                <strong>Contact Us</strong>
                <i className="fa fa-chevron-right" aria-hidden="true" />
              </Link>
            </div>
            <div className="content-separator">&nbsp;</div>
            {/* ends (.content-separator) */}
            <div className="socialInfo">
              <div className="text-center social-sharing-info bottom-social-share">
                <p className="social-share-block">
                  <i
                    className="share-icon fas fa-share-alt"
                    aria-hidden="true"
                  />
                  <span
                    className="social-icons a2a_kit a2a_kit_size_32 a2a_default_style"
                    style={{ lineHeight: 0 }}
                  >
                    <a
                      className="a2a_button_facebook"
                      href="/#facebook"
                      title="Facebook"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <span
                        className="a2a_svg a2a_s__default a2a_s_facebook"
                        style={{ backgroundColor: "rgb(8, 102, 255)" }}
                      >
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#fff"
                            d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.628 3.875 10.35 9.101 11.647v-7.98h-2.474V16H13.1v-1.58c0-4.085 1.849-5.978 5.859-5.978.76 0 2.072.15 2.608.298v3.325c-.283-.03-.775-.045-1.386-.045-1.967 0-2.728.745-2.728 2.683V16h3.92l-.673 3.667h-3.247v8.245C23.395 27.195 28 22.135 28 16"
                          />
                        </svg>
                      </span>
                      <span className="a2a_label">Facebook</span>
                    </a>
                    <a
                      className="a2a_button_twitter"
                      href="/#twitter"
                      title="Twitter"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <span
                        className="a2a_svg a2a_s__default a2a_s_twitter"
                        style={{ backgroundColor: "rgb(29, 155, 240)" }}
                      >
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#FFF"
                            d="M28 8.557a10 10 0 0 1-2.828.775 4.93 4.93 0 0 0 2.166-2.725 9.7 9.7 0 0 1-3.13 1.194 4.92 4.92 0 0 0-3.593-1.55 4.924 4.924 0 0 0-4.794 6.049c-4.09-.21-7.72-2.17-10.15-5.15a4.94 4.94 0 0 0-.665 2.477c0 1.71.87 3.214 2.19 4.1a5 5 0 0 1-2.23-.616v.06c0 2.39 1.7 4.38 3.952 4.83-.414.115-.85.174-1.297.174q-.476-.001-.928-.086a4.935 4.935 0 0 0 4.6 3.42 9.9 9.9 0 0 1-6.114 2.107q-.597 0-1.175-.068a13.95 13.95 0 0 0 7.55 2.213c9.056 0 14.01-7.507 14.01-14.013q0-.32-.015-.637c.96-.695 1.795-1.56 2.455-2.55z"
                          />
                        </svg>
                      </span>
                      <span className="a2a_label">Twitter</span>
                    </a>
                    <a
                      className="a2a_button_whatsapp"
                      href="/#whatsapp"
                      title="WhatsApp"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <span
                        className="a2a_svg a2a_s__default a2a_s_whatsapp"
                        style={{ backgroundColor: "rgb(18, 175, 10)" }}
                      >
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#FFF"
                            fillRule="evenodd"
                            d="M16.21 4.41C9.973 4.41 4.917 9.465 4.917 15.7c0 2.134.592 4.13 1.62 5.832L4.5 27.59l6.25-2.002a11.24 11.24 0 0 0 5.46 1.404c6.234 0 11.29-5.055 11.29-11.29 0-6.237-5.056-11.292-11.29-11.292m0 20.69c-1.91 0-3.69-.57-5.173-1.553l-3.61 1.156 1.173-3.49a9.35 9.35 0 0 1-1.79-5.512c0-5.18 4.217-9.4 9.4-9.4s9.397 4.22 9.397 9.4c0 5.188-4.214 9.4-9.398 9.4zm5.293-6.832c-.284-.155-1.673-.906-1.934-1.012-.265-.106-.455-.16-.658.12s-.78.91-.954 1.096c-.176.186-.345.203-.628.048-.282-.154-1.2-.494-2.264-1.517-.83-.795-1.373-1.76-1.53-2.055s0-.445.15-.584c.134-.124.3-.326.45-.488.15-.163.203-.28.306-.47.104-.19.06-.36-.005-.506-.066-.147-.59-1.587-.81-2.173-.218-.586-.46-.498-.63-.505-.168-.007-.358-.038-.55-.045-.19-.007-.51.054-.78.332-.277.274-1.05.943-1.1 2.362-.055 1.418.926 2.826 1.064 3.023.137.2 1.874 3.272 4.76 4.537 2.888 1.264 2.9.878 3.43.85.53-.027 1.734-.633 2-1.297s.287-1.24.22-1.363c-.07-.123-.26-.203-.54-.357z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="a2a_label">WhatsApp</span>
                    </a>
                    <a
                      className="a2a_button_facebook_messenger"
                      href="/#facebook_messenger"
                      title="Facebook Messenger"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <span
                        className="a2a_svg a2a_s__default a2a_s_facebook_messenger"
                        style={{ backgroundColor: "rgb(0, 132, 255)" }}
                      >
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#FFF"
                            d="M16 5C9.986 5 5.11 9.56 5.11 15.182c0 3.2 1.58 6.054 4.046 7.92V27l3.716-2.06c.99.276 2.04.425 3.128.425 6.014 0 10.89-4.56 10.89-10.183S22.013 5 16 5m1.147 13.655L14.33 15.73l-5.423 3 5.946-6.31 2.816 2.925 5.42-3-5.946 6.31z"
                          />
                        </svg>
                      </span>
                      <span className="a2a_label">Messenger</span>
                    </a>
                    <a
                      className="a2a_button_reddit"
                      href="/#reddit"
                      title="Reddit"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <span
                        className="a2a_svg a2a_s__default a2a_s_reddit"
                        style={{ backgroundColor: "rgb(255, 69, 0)" }}
                      >
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#fff"
                            d="M28.543 15.774a2.953 2.953 0 0 0-2.951-2.949 2.88 2.88 0 0 0-1.9.713 14.1 14.1 0 0 0-6.85-2.044l1.38-4.349 3.768.884a2.452 2.452 0 1 0 .24-1.176l-4.274-1a.6.6 0 0 0-.709.4l-1.659 5.224a14.3 14.3 0 0 0-7.316 2.029 2.9 2.9 0 0 0-1.872-.681 2.942 2.942 0 0 0-1.618 5.4 5 5 0 0 0-.062.765c0 4.158 5.037 7.541 11.229 7.541s11.22-3.383 11.22-7.541a5 5 0 0 0-.053-.706 2.96 2.96 0 0 0 1.427-2.51m-18.008 1.88a1.753 1.753 0 0 1 1.73-1.74 1.73 1.73 0 0 1 1.709 1.74 1.71 1.71 0 0 1-1.709 1.711 1.733 1.733 0 0 1-1.73-1.711m9.565 4.968a5.57 5.57 0 0 1-4.081 1.272h-.032a5.58 5.58 0 0 1-4.087-1.272.6.6 0 0 1 .844-.854 4.5 4.5 0 0 0 3.238.927h.032a4.5 4.5 0 0 0 3.237-.927.6.6 0 1 1 .844.854zm-.331-3.256a1.726 1.726 0 1 1 1.709-1.712 1.717 1.717 0 0 1-1.712 1.712z"
                          />
                        </svg>
                      </span>
                      <span className="a2a_label">Reddit</span>
                    </a>
                    <a
                      className="a2a_button_pinterest"
                      href="/#pinterest"
                      title="Pinterest"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <span
                        className="a2a_svg a2a_s__default a2a_s_pinterest"
                        style={{ backgroundColor: "rgb(230, 0, 35)" }}
                      >
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#fff"
                            d="M15.995 4C9.361 4 4 9.37 4 15.995c0 5.084 3.16 9.428 7.622 11.176-.109-.948-.198-2.41.039-3.446.217-.938 1.402-5.963 1.402-5.963s-.356-.72-.356-1.777c0-1.668.968-2.912 2.172-2.912 1.027 0 1.52.77 1.52 1.688 0 1.027-.65 2.567-.996 3.998-.287 1.195.602 2.172 1.777 2.172 2.132 0 3.771-2.25 3.771-5.489 0-2.873-2.063-4.877-5.015-4.877-3.416 0-5.42 2.557-5.42 5.203 0 1.027.395 2.132.888 2.735a.36.36 0 0 1 .08.345c-.09.375-.297 1.195-.336 1.363-.05.217-.178.266-.405.158-1.481-.711-2.409-2.903-2.409-4.66 0-3.781 2.745-7.257 7.928-7.257 4.156 0 7.394 2.962 7.394 6.931 0 4.137-2.606 7.464-6.22 7.464-1.214 0-2.36-.632-2.744-1.383l-.75 2.854c-.267 1.046-.998 2.35-1.491 3.149a12 12 0 0 0 3.554.533C22.629 28 28 22.63 28 16.005 27.99 9.37 22.62 4 15.995 4"
                          />
                        </svg>
                      </span>
                      <span className="a2a_label">Pinterest</span>
                    </a>
                    <a
                      className="a2a_button_email"
                      href="/#email"
                      title="Email"
                      target="_blank"
                      rel="nofollow noopener"
                    >
                      <span
                        className="a2a_svg a2a_s__default a2a_s_email"
                        style={{ backgroundColor: "rgb(136, 137, 144)" }}
                      >
                        <svg
                          focusable="false"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="#fff"
                            d="M27 21.775v-9.9s-10.01 6.985-10.982 7.348C15.058 18.878 5 11.875 5 11.875v9.9c0 1.375.293 1.65 1.65 1.65h18.7c1.393 0 1.65-.242 1.65-1.65m-.017-11.841c0-1.002-.291-1.359-1.633-1.359H6.65c-1.38 0-1.65.429-1.65 1.43l.016.154s9.939 6.842 11 7.216C17.14 16.941 27 10.005 27 10.005z"
                          />
                        </svg>
                      </span>
                      <span className="a2a_label">Email</span>
                    </a>
                  </span>
                </p>
                <div style={{ clear: "both" }} />
                <p />
              </div>
            </div>
            {/* <div class="mvp-comment-box"></div> */}
            {/* ends (.mvp-comment-box) */}
            <div
              id="comment-policy"
              className="comment-policy publisher-anchor-color  "
            >
              <div className="content">
                <h2 className="title">
                  MVPBOXING.COM Comment Policy
                  <i aria-hidden="true" className="fa fa-5x fa-comments-o " />
                </h2>
                <p>"Hey, why isn't my comment displaying?!"</p>
                <p>
                  Please read our{" "}
                  <a
                    href="/comment_policy"
                    target="_blank"
                    className="policy-link"
                  >
                    Comment Policy
                  </a>{" "}
                  before commenting.
                </p>
              </div>
            </div>
            <div className="comments">
              <div className="main-title w-100 row mx-0">
                <div className="col-7 pl-1">
                  <i className="fa fa-comments-o" aria-hidden="true" />{" "}
                  <span id="total_comments">0</span> <span>Comments</span>
                </div>
                <div id="share-block" className="col-5 text-right pr-1">
                  <i className="fa fa-share-alt" aria-hidden="true" /> Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
