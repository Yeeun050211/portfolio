const WorkStyle = () => {
  return (
    <section className="max-w-4xl ml-20 pt-6 pb-12 px-2">
      <h2 className="text-3xl font-bold items-center gap-2 mb-2">
        <span>🧑🏻‍💻</span> How I Work
      </h2>
      <hr className="w-[1000px] border-t border-gray-600 mb-6" />

      <ul className="space-y-4 text-[17px] leading-relaxed">
        <li>
          1. 목표를 달성하는 것도 중요하지만, 저는{" "}
          <span className="font-semibold bg-red-100 px-1 rounded">
            일의 과정에서 의미와 재미를 찾는 것
          </span>
          을 더 중요하게 생각하는 편입니다. 동료들과의 협업, 작은 성취, 새로운 시도를 통해 일하는 자체를 즐기려고 합니다.
        </li>
        <li>
          2. 문제가 생기더라도{" "}
          <span className="font-semibold bg-red-100 px-1 rounded">
            그 안에서 해결 가능한 방법을 찾아내는 것
          </span>
          이 제 Work Style입니다. 문제를 피하기보다는 마주하고, 가능한 대안을 함께 도출해내려 노력합니다.
        </li>
        <li>
          3. {" "}
          <span className="font-semibold bg-red-100 px-1 rounded">
            약속은 신뢰의 출발점
          </span>
          이라고 생각합니다. 함께 정한 기한이나 룰은 반드시 지키려 하며, 일정 내에 최선의 결과물을 내기 위해 노력합니다.
        </li>
      </ul>
    </section>
  );
};

export default WorkStyle;